import { useTranslations } from "next-intl";

export default function NotFound() {
    const notFound = useTranslations('notFound');

    return (
        <div>
            <h1>{notFound('title')}</h1>
        </div>
    )
}