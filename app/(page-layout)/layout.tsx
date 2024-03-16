import { Courier_Prime } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer'
import '../globals.css'

const globalFont = Courier_Prime({
    weight: '400',
    subsets: ['latin'],
});

export default function RootLayout(
    {children,}: Readonly<{children: React.ReactNode;}>) 
{
    return (
        <html lang="en">
            <body className={globalFont.className + ' bg-black'}>
                <div className='bg-seaspace bg-cover bg-no-repeat h-fit flex flex-col'>
                    <Navbar />
                    <main className='grow p-2'>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
