export const SECURE = Object.freeze({
    GOOGLE: {
        USERNAME: process.env.GOOGLE_USERNAME,
        APP_PASSWORD: process.env.GOOGLE_APP_PASSWORD,
        HOST_MAIL: process.env.GOOGLE_HOST_MAIL,
        PORT_MAIL: process.env.GOOGLE_PORT_MAIL,
    },
    UPSTASH: {
        REDIS_REST_URL: process.env.KV_REST_API_URL,
        REDIS_REST_TOKEN: process.env.KV_REST_API_TOKEN,
    },
    TURNSTILE: {
        SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    },
});
