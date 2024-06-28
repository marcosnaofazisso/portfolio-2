"use client"

import { useBootingStore } from "@/store/boot/bootStore";
import Link from "next/link";

export default function Header() {

    const isBooting = useBootingStore().isBooting

    return (
        <>
            {isBooting ? <></> :
                <header style={{ backgroundColor: "#f69" }}>
                    <div>
                        <Link href={"/home"}>Home</Link>
                        <Link href={"/fotografia"}>Fotografia</Link>
                        <Link href={"/contato"}>Contato</Link>
                        <Link href={"/blog"}>Blog</Link>
                    </div>
                    <div>
                    </div>
                </header>}

        </>
    )
}
