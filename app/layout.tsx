import { Tektur } from 'next/font/google';
import type { Metadata } from "next";

import { Footer, Header } from "@/components/shared";

import "./globals.scss";
import { cn } from '@/lib/utils';

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
        className={cn(
          `${tektur.variable} antialiased bg-regal_black`,
          "flex flex-col min-h-[100dvh] w-full relative"
        )
        }
      >
        <Header />
        <main className='flex-grow flex justify-center items-center max-h-full overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
