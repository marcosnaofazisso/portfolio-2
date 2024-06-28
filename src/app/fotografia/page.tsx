import Link from "next/link";
import styles from "./page.module.css"

export default function page() {
    return (
        <main>
            <div className={styles.cutive}>
                <h1>FOTOGRAFIA</h1>
                <h1 className={styles.roboto}>FOTOGRAFIA</h1>
                <p>FOTOGRAFIA</p>
                <p>FOTOGRAFIA</p>
                <p>FOTOGRAFIA</p>
                <p>FOTOGRAFIA</p>
                <Link href={"/"}>go back</Link>
            </div>
        </main>
    );
}
