import { create } from "zustand";

type BootStore = {
    isBooting: boolean,
    hasBooted: () => void,
}

export const useBootingStore = create<BootStore>((set) => ({
    isBooting: true,
    hasBooted: () => set(() => ({ isBooting: false })),
}))

useBootingStore.subscribe(
    (state) => state.isBooting
);