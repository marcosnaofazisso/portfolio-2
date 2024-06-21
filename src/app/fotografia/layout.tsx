import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotografia - Marcos Vinicius Ferreira",
    description: "Fotografia of Marcos Vinicius Ferreira, developer, photographer and full-stack of life",
};

export default function FotografiaLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}
