import { languages } from "@/utils/helpers/languageHelper";
import { create } from "zustand";

type LanguageStore = {
    selectedLanguage: string,
    changeSelected: (index: number) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    selectedLanguage: languages[0],
    changeSelected: (index: number) => {
        if (index >= 0 && index < languages.length) {
            set({ selectedLanguage: languages[index] });
        } else {
            console.warn(`Index ${index} is out of bounds for languages array`);
        }
    },
}))

useLanguageStore.subscribe(
    (state) => state.selectedLanguage
);