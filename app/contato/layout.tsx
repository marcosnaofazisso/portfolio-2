import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contato - Marcos Vinicius Ferreira",
    description: "Contato of Marcos Vinicius Ferreira, developer, photographer and full-stack of life",
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}
