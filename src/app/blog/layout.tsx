import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Marcos Vinicius Ferreira",
    description: "Blog of Marcos Vinicius Ferreira, developer, photographer and full-stack of life",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}
