import Link from 'next/link'
import LinkContent from './link-content'

/**
 * Main Links page
 * @returns Main page as ReactNode
 */
export default function LinksPage() : React.ReactNode
{
    return <div>
        <div className='text-center py-3'>
            <h1 className='text-golden text-4xl font-bold'>Useful Links</h1>
        </div>
        <div className='grid grid-cols-fillmax gap-4 p-4'>
            <LinkContent />
        </div>
    </div>
}
