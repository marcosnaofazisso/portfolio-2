import { languages } from "@/utils/helpers/languageHelper";
import { create } from "zustand";

interface Language {
    key: string,
    name: string
}

type LanguageStore = {
    selectedLanguage: Language,
    changeSelected: (index: number) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    selectedLanguage: { key: Object.keys(languages[0])[0], name: Object.values(languages[0])[0] },
    changeSelected: (index: number) => {
        const selected = languages[index];
        if (selected) {
            const languageKey = Object.keys(selected)[0];
            const languageName = selected[languageKey];
            set({ selectedLanguage: { key: languageKey, name: languageName } });
        } else {
            console.warn(`Index "${index}" was not found in the languages array`);
        }
    },
}))

useLanguageStore.subscribe(
    (state) => state.selectedLanguage
);