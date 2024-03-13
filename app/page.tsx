import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() : React.ReactNode
{
    return <>
        <Navbar />
        <div className='bg-seaspace bg-cover bg-no-repeat h-fit md:h-screen lg:h-screen p-2'>
            <div className='my-4 mx-8 p-3 bg-black border-white border-2 text-white'>
                <h1 className='text-4xl text-golden'>Welcome to my website!</h1>
                <p>This is a website. I think you already knew that though...</p>
            </div>
        </div>
        <Footer />
    </>;
}