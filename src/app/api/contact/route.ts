import {
  MessageValues,
  schema,
} from "@/components/organisms/form/contact/model";
import { SECURE } from "@/lib/constants";
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
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid message!" }, { status: 400 });
  }

  const { name, email, subject, message }: MessageValues = parsed.data;

  const mailOption: SendMailOptions = {
    /* gmail rewrites "from" to the authenticated account, so send as ourselves and reply to the visitor */
    from: { name, address: SECURE.GOOGLE.USERNAME! },
    to: SECURE.GOOGLE.USERNAME,
    replyTo: { name, address: email },
    subject,
    html: `<p style="white-space: pre-line;">${escapeHtml(message)}\n\nSincerely,\n${name}</p>`,
  };

  try {
    await transporter.sendMail(mailOption);
    return NextResponse.json({ message: "Message already sent!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Message failed to send!" },
      { status: 500 },
    );
  }
}
