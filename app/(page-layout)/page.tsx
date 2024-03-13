import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() : React.ReactNode
{
    return <div className='my-4 mx-8 p-3 bg-black border-white border-2 text-white'>
        <h1 className='text-4xl text-golden'>Welcome to Resire&apos;s Website!</h1>
        <p>This is a simple website for some cool things I have made or found on the internet.</p>
    </div>;
}