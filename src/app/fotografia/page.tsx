import Link from "next/link";
import styles from "./page.module.css"

export default function page() {
    return (
        <main>
            <div>
                <h1>FOTOGRAFIA</h1>
                <Link href={"/"}>go back</Link>
            </div>
        </main>
    );
}
