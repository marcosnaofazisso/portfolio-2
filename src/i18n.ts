import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const brasileiro = "br"
const portugues = "pt"
const english = "en"
const american = "us"

const locales = [brasileiro, portugues, american, english];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});