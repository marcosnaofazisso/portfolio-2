import Link from 'next/link'
import MainBanner from '../banners/home/MainBanner'
import styles from "./Home.module.css"

import { motion, useScroll } from "framer-motion"


export default function HomeMain() {

    const { scrollYProgress } = useScroll();

    return (
        <div className={styles.mainContainer}>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <motion.div style={{ scaleX: scrollYProgress }} />

            <h1>Home</h1>
            <MainBanner />
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} animate={{ x: 100 }} />
            <motion.div animate={{ x: 100 }} />
            <motion.div animate={{ x: 100 }} />
            <motion.div animate={{ x: 100 }} />
            <motion.div animate={{ x: 100 }} />
            <motion.div animate={{ x: 100 }} />
            <motion.div animate={{ x: 100 }} />

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
    )
}
