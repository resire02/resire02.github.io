import Link from 'next/link'
import LinkContent from './link-content'

/**
 * Main Links page
 * @returns Main page as ReactNode
 */
export default function LinksPage() : React.ReactNode
{
    return <div className='px-10 py-5'>
        <div className='text-center py-3 mb-2'>
            <h1 className='text-golden text-4xl font-bold'>Useful Links</h1>
        </div>
        <div className='grid grid-cols-fillmax gap-6'>
            <LinkContent />
        </div>
    </div>
}
