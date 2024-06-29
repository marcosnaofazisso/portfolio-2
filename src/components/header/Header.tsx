"use client"

import { useBootingStore } from "@/store/boot/bootStore";
import { useLanguageStore } from "@/store/language/languageStore";
import { languages } from "@/utils/helpers/languageHelper";
import { MenuItem } from "@mui/material";
import Link from "next/link";
import { LanguageSelect } from "../ui/selects/LanguageSelect";
import { IOSSwitch } from "../ui/switches/Switch";
import styles from './Header.module.css';

export default function Header() {

    const languageStore = useLanguageStore()

    const isBooting = useBootingStore().isBooting

    const languageKeyValue: number = parseInt(languageStore.selectedLanguage.key) - 1

    const handleChange = (index: number | string) => {
        const validIndex: number = typeof index === 'string' ? parseInt(index) : index
        languageStore.changeSelected(validIndex)
    }

    return (
        <>
            {isBooting ? <></> :
                <header className={styles.header}>
                    <div className={styles.menu}>
                        <Link href={"/"} className={styles.home}>Home</Link>
                        <hr className={styles.barRight} />
                        <Link href={"/fotografia"} className={styles.fotografia}>Fotografia</Link>
                        <hr className={styles.barLeft} />
                        <Link href={"/contato"} className={styles.contato}>Contato</Link>
                        <Link href={"/blog"} className={styles.blog}>Blog</Link>
                    </div>
                    <div className={styles.additional}>
                        <div>
                            <LanguageSelect
                                value={languageKeyValue}
                                onChange={(event) => handleChange(event.target.value)}
                                label="Language Selected">
                                {languages.map((lang, index) => {
                                    const [key, languageName] = Object.entries(lang)[0];
                                    return (
                                        <MenuItem
                                            key={key}
                                            value={index}>
                                            {languageName}
                                        </MenuItem>)
                                })}
                            </LanguageSelect>
                        </div>
                        <div>
                            <IOSSwitch defaultChecked />
                        </div>
                    </div>
                </header>}

        </>
    )
}
