import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ensaios - Marcos Vinicius Ferreira",
    description: "Ensaios of Marcos Vinicius Ferreira, developer, photographer and full-stack of life",
};

export default function EnsaiosLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}
