"use client"

import { useBootingStore } from "@/store/boot/bootStore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import Link from "next/link";
import { IOSSwitch } from "../ui/switches/Switch";
import styles from './Header.module.css';
import { languages } from "@/utils/helpers/languageHelper";

export default function Header() {

    const isBooting = useBootingStore().isBooting

    return (
        <>
            {isBooting ? <></> :
                <header className={styles.header}>
                    <div className={styles.menu}>
                        <Link href={"/home"} className={styles.home}>Home</Link>
                        <hr className={styles.barRight} />
                        <Link href={"/fotografia"} className={styles.fotografia}>Fotografia</Link>
                        <hr className={styles.barLeft} />
                        <Link href={"/contato"} className={styles.contato}>Contato</Link>
                        <Link href={"/blog"} className={styles.blog}>Blog</Link>
                    </div>
                    <div className={styles.additional}>
                        <div>
                            <Select
                                sx={{
                                    border: 0,
                                    boxShadow: "none",
                                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                    {
                                        border: 0,
                                    },
                                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        border: 0,
                                    },
                                }}
                                value={0}
                                IconComponent={ExpandMoreIcon}
                                label="Age">
                                {languages.map((language, index) => (
                                    <li
                                        key={index}
                                        value={index}
                                        className={index === 0 ? styles.invisible : ''}>
                                        {language}
                                    </li>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <IOSSwitch defaultChecked />
                        </div>
                    </div>
                </header>}

        </>
    )
}
