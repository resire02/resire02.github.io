import Image from 'next/image'
import Link from 'next/link';
import GithubLogo from '../public/github.png'
import LinkedInLogo from '../public/linkedin.png'


export default function Footer() : React.JSX.Element {
    return (
        <footer className='flex flex-col justify-center items-center bg-black py-3 relative w-screen'>
            <div className='flex gap-4 my-2'>
                <Link href="https://github.com/resire02" target='blank'>
                    <Image src={GithubLogo} alt='My Github' width={50} height={50}/>
                </Link>
                <Link href="https://www.linkedin.com/in/felix-leong-706b1a293/" target='blank'>
                    <Image src={LinkedInLogo} alt='My LinkedIn' width={50} height={50}/>
                </Link>
            </div>
            <p className="text-white">Made by Felix</p>
        </footer>
    );
}