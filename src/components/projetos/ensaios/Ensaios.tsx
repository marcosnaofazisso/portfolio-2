import Link from 'next/link'

export default function Ensaios() {
    return (
        <div>
            <h1>ENSAIOS</h1>
            <Link href={"/fotografia"}>go back</Link>
            <Link href={"/"}>go home</Link>
        </div>
    )
}
