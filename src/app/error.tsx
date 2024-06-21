'use client' // Error components must be Client Components

export default function Error({ }: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div>
            <h1>Something went wrong!</h1>
        </div>
    )
}