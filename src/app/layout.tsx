
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Vinicius Ferreira",
  description: "Portfolio of Marcos Vinicius Ferreira, developer, photographer and full-stack of life",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="pt-BR">
      <body className={`main`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
