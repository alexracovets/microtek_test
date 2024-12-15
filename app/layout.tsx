import { Tektur } from 'next/font/google';
import type { Metadata } from "next";

import { Header } from "@/components/shared";

import "./globals.scss";

const tektur = Tektur({
  weight: ["400", "500", "600"],
  variable: '--font-tektur',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Microtek",
  description: "Microtek",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${tektur.variable} antialiased bg-regal_black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
