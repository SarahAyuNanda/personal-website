import { SECURE } from "@/lib/constants";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/* tokens are single-use and expire after 5 minutes; cloudflare tracks both, so a replayed token fails here */
export const verifyTurnstile = async (token: string, ip?: string) => {
    const secret = SECURE.TURNSTILE.SECRET_KEY;
    if (!secret) {
        /* fail closed: a missing secret must not silently disable bot protection */
        console.error("TURNSTILE_SECRET_KEY is not set");
        return false;
    }

    try {
        const response = await fetch(VERIFY_URL, {
            method: "POST",
            body: new URLSearchParams({
                secret,
                response: token,
                ...(ip && ip !== "unknown" ? { remoteip: ip } : {}),
            }),
            signal: AbortSignal.timeout(10_000),
        });
        const result: { success: boolean; "error-codes"?: string[] } =
            await response.json();
        if (!result.success) {
            console.warn("Turnstile rejected", result["error-codes"]);
        }
        return result.success;
    } catch (error) {
        console.error("Turnstile verification failed", error);
        return false;
    }
};
