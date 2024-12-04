import Link from 'next/link'

export default function ErrorPage() {
    return (
        <div>
            <p>Sorry, something went wrong</p>
            <Link href="/">voltar para página inicial</Link>
        </div>
    )
}
