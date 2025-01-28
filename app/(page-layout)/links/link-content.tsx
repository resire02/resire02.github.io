import website_links from '../../_data/website-links.json';

export default function LinkContent() : React.ReactNode
{
    const linkObj: Array<LinkFormat> = website_links as Array<LinkFormat>;
    const allLinks: Array<LinkFormat> = linkObj.map((item, index) => {
        item.id = index;
        return item;
    });
    return (
        allLinks.map(obj =>
            <div key={obj.id} className='p-3 border-white border-2 border-solid text-center bg-black shadow-lg hover:shadow-white transition-shadow'>
                <a href={obj.url} target="_blank">
                    <h2 className="text-2xl text-golden font-bold">{obj.title}</h2>
                </a>
                <p className="text-white">
                    Tags: {obj.tags || 'No Tags'}
                </p>
            </div>
        )
    );
}

//  format for link object structure
interface LinkFormat 
{
    id: number | null;
    title: string;
    url: string;
    tags: Array<string>;
}

