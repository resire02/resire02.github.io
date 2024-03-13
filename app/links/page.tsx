import LinkContent from './link-content'
import Navbar from '../navbar';
import Footer from '../footer';

/**
 * Main Links page
 * @returns Main page as ReactNode
 */
export default function LinksPage() : React.ReactNode
{
    return <>
        <Navbar />
        <div className='bg-seaspace bg-cover bg-no-repeat h-fit md:h-screen lg:h-screen p-2'>
            <div className='px-10 pb-5'>
                <div className='text-center py-3 mb-2'>
                    <h1 className='text-golden text-4xl font-black'>Cool &amp; Useful Links</h1>
                    <p className='text-white'>A collection of links I found to be interesting categorized by topic.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-fillmax lg:grid-cols-fillmax gap-6'>
                    <LinkContent />
                </div>
            </div>        
        </div>
        <Footer />
    </>;
}
