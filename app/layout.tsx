import { Courier_Prime } from 'next/font/google'
import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Resire's Website",
  description: "Made by resire02",
};

const globalFont = Courier_Prime({
    weight: '400',
    subsets: ['latin'],
});

export default function RootLayout(
    {children,}: Readonly<{children: React.ReactNode;}>) 
{
    return (
        <html lang="en">
            <body className={globalFont.className}>
                {children}
            </body>
        </html>
    );
}
