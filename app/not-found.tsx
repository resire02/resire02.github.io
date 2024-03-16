import Link from "next/link"

export default function NotFound() : React.ReactNode
{
    return <div className='w-screen h-screen bg-black'>
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-white'>There is nothing here.</h1>
            <Link href='/' className='text-golden hover:text-white hover:underline'>Back to home page</Link>
        </div>
    </div>;
}