import Link from 'next/link'

export default function Navbar() : React.ReactNode
{
    return <div className="flex w-full justify-between items-center p-5 bg-navy-sea border-white border-b-2">
        <h1 className="text-2xl font-bold text-white">Resire&apos;s Website</h1>
        <nav>
            <Link href="/"      className="mx-4 text-golden hover:underline hover:text-white block lg:inline">Home</Link>   
            <Link href="/links" className="mx-4 text-golden hover:underline hover:text-white block lg:inline">Links</Link>
            <Link href="/music" className="mx-4 text-golden hover:underline hover:text-white block lg:inline">Music</Link>
        </nav>
    </div>
}