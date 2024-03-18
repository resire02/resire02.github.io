import Image from 'next/image'
import Link from 'next/link';

import GithubLogo from '../../public/github.png'

export default function Footer() : React.ReactNode
{
    return <footer className='flex flex-col justify-center items-center bg-black py-3 relative w-screen'>
        <p className="text-white">Made by Felix</p>
        <div>
            <Link href="https://github.com/resire02/resire02.github.io">
                <Image src={GithubLogo} alt='Github' width={50} height={50}/>
            </Link>
        </div>
    </footer>;
}