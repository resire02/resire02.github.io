"use client"

import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() : React.ReactNode
{
    return <div className="min-h-screen">
        <div className='mt-4 mx-8 p-3 bg-black border-white border-2 text-white rounded-xl shadow-xl shadow-black'>
            <h1 className='text-4xl text-golden'>Resire&apos;s Website!</h1>
            <p>This is a simple website for some cool things I have made or found on the internet.</p>
        </div>
    </div>;
}