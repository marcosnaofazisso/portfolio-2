import Link from 'next/link'

export default function HomeMain() {

    return (
        <main>
            <div>
                <h1>Home</h1>;
                <Link href={"/fotografia"}>go to fotografia</Link>
                <br />
                <Link href={"/projetos"}>go to projetos</Link>
                <br />
                <Link href={"/fotografia/ensaios"}>go to ensaios</Link>
                <br />
                <Link href={"/contato"}>go to contato</Link>
                <br />
                <Link href={"/blog"}>go to blog</Link>
                <br />
                <Link href={"/CHURROS"}>go to NOT FOUND</Link>
                <br />
                {/* <Link href={() => asdasd}>go to ERROR</Link> */}
                <br />
            </div>
        </main>
    )
}
