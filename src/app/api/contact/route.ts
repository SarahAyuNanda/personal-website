import {
    MessageValues,
    schema,
} from "@/components/organisms/form/contact/model";
import { SECURE } from "@/lib/constants";
import { contactRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

const port = Number(SECURE.GOOGLE.PORT_MAIL);

/* reuse one transporter across requests; fail fast instead of nodemailer's 2-minute default timeouts */
const transporter = nodemailer.createTransport({
    host: SECURE.GOOGLE.HOST_MAIL,
    port,
    secure: port === 465,
    auth: {
        user: SECURE.GOOGLE.USERNAME,
        pass: SECURE.GOOGLE.APP_PASSWORD,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
});

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export async function POST(req: Request) {
    const ip = getClientIp(req);

    if (contactRateLimit) {
        const { success, reset } = await contactRateLimit.limit(ip);
        if (!success) {
            const retryAfter = Math.max(
                1,
                Math.ceil((reset - Date.now()) / 1000)
            );
            return NextResponse.json(
                { message: "Too many messages! Please try again later." },
                {
                    status: 429,
                    headers: { "Retry-After": String(retryAfter) },
                }
            );
        }
    } else {
        console.warn("Upstash not configured, contact rate limit disabled");
    }

    const body = await req.json().catch(() => null);
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { message: "Invalid message!" },
            { status: 400 }
        );
    }

    const token = body?.captchaToken;
    if (typeof token !== "string" || !(await verifyTurnstile(token, ip))) {
        return NextResponse.json(
            { message: "Captcha verification failed!" },
            { status: 400 }
        );
    }

    const { name, email, subject, message }: MessageValues = parsed.data;

    const mailOption: SendMailOptions = {
        /* gmail smtp always rewrites "from" to the authenticated account (spoofing the visitor would also fail DMARC),
           so send as ourselves with the visitor's name, and route replies to the visitor via replyTo */
        from: {
            name: `${name} (via Portfolio)`,
            address: SECURE.GOOGLE.USERNAME!,
        },
        to: SECURE.GOOGLE.USERNAME,
        replyTo: { name, address: email },
        subject,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</p><hr /><p style="white-space: pre-line;">${escapeHtml(message)}\n\nSincerely,\n${escapeHtml(name)}</p>`,
    };

    try {
        await transporter.sendMail(mailOption);
        return NextResponse.json({ message: "Message already sent!" });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Message failed to send!" },
            { status: 500 }
        );
    }
}
