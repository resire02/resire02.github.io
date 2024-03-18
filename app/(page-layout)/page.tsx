"use client"

import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function Home() : React.ReactNode
{
    return <div className="min-h-screen">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className='mt-4 mx-8 p-3 bg-black border-white border-2 text-white rounded-xl shadow-xl shadow-black'>
                <h1 className='text-4xl text-golden'>Resire&apos;s Website!</h1>
                <p>This is a simple website for some cool things I have made or found on the internet.</p>
            </div>
        </motion.div>
    </div>;
}