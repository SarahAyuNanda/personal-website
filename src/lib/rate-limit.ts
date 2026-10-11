import { SECURE } from "@/lib/constants";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const { REDIS_REST_URL, REDIS_REST_TOKEN } = SECURE.UPSTASH;

/* counts live in upstash redis because serverless instances don't share memory; null when not configured (e.g. local dev) */
export const contactRateLimit =
    REDIS_REST_URL && REDIS_REST_TOKEN
        ? new Ratelimit({
              redis: new Redis({
                  url: REDIS_REST_URL,
                  token: REDIS_REST_TOKEN,
              }),
              limiter: Ratelimit.slidingWindow(3, "1 h"),
              prefix: "ratelimit:contact",
          })
        : null;

/* vercel sets x-forwarded-for; the first entry is the original client */
export const getClientIp = (req: Request) =>
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
