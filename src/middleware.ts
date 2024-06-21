import createMiddleware from 'next-intl/middleware';

const brasileiro = "br"
const portugues = "pt"
const english = "en"
const american = "us"

export default createMiddleware({
    // A list of all locales that are supported
    locales: [english, brasileiro, portugues, american],

    // Used when no locale matches
    defaultLocale: brasileiro
});

export const config = {
    matcher: ['/', `/(${brasileiro}|${portugues}|${american}|${english})/:path*`]
};