import Navbar from "../navbar";
import Footer from "../footer";

export default function MusicPage() : React.ReactNode
{
    return <div className="flex flex-col items-center gap-4">
        <section className="text-center">
            <h1 className='text-golden text-4xl font-bold'>My Music</h1>
            <p className='text-white'>Hobbyist producer, working in FL Studio 21. I typically make electronic/video game music.</p>
        </section>
        <h1 className='text-golden text-4xl font-bold'>My Albums</h1>
        <iframe className='w-1/3' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1079741821&color=%23c9312c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
    </div>;
}
