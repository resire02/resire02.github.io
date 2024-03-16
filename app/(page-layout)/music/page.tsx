import Navbar from "../navbar";
import Footer from "../footer";
import AudioPlayer from "./audio-player";

export default function MusicPage() : React.ReactNode
{
    return <div className="flex flex-col items-center gap-4">
        <section className="text-center">
            <h1 className='text-golden text-4xl font-bold'>My Music</h1>
            <p className='text-white'>Hobbyist producer, working in FL Studio 21. I typically make electronic/video game music.</p>
        </section>
        <h1 className='text-golden text-4xl font-bold'>My Albums</h1>
        <AudioPlayer />
    </div>;
}
