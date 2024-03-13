import Navbar from "../navbar";
import Footer from "../footer";

export default function MusicPage() : React.ReactNode
{
    return <>
        <Navbar />
        <div className='bg-seaspace bg-cover bg-no-repeat h-fit md:h-screen lg:h-screen p-2'>
            <div>
                <h1 className="text-white">My Music</h1>
            </div>
        </div>
        <Footer />
    </>;
    
}
