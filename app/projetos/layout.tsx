import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projetos - Marcos Vinicius Ferreira",
    description: "Projects of Marcos Vinicius Ferreira, developer, photographer and full-stack of life",
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}
