import { Courier_Prime } from 'next/font/google'
import type { Metadata } from "next";
import Navbar from './navbar'
import Footer from './footer'
import './globals.css'

export const metadata: Metadata = {
  title: "My Website",
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
                <Navbar />
                <div className='bg-seaspace bg-cover bg-no-repeat h-screen p-2'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
