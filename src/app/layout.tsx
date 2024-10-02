import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Coin-play",
  description: "Versão básica da loja de jogos Coin.play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
