export default function LinkContent() : React.ReactNode
{
    return allLinks.map(obj => {
        let title = obj['title'];
        let content = obj['links'].map(link =>
            <a href={link['link']} key={link['summary']} target='_blank' className='block text-gray-500 hover:text-white'>{link['summary']}</a>
        );
        return <div key={title} className='p-3 border-white border-2 border-solid text-center bg-black shadow-lg hover:shadow-white transition-shadow'>
            <h2 className='text-2xl text-golden font-bold'>{title}</h2>
            <div className='py-2'>
                {content}
            </div>
        </div>;
    });
}

//  format for link object structure
interface LinkFormat 
{
    title: string;
    links: Array<{
        summary: string;
        link: string;
    }>;
}

//  TODO: store this seperately!
const allLinks : Array<LinkFormat> = [
    {
        "title": "Learning Hubs",
        "links": [
            {"summary": "Free Courses on Kaggle", "link": "https://www.kaggle.com/learn"},
            {"summary": "Learn Programming on GeeksForGeeks", "link": "https://www.geeksforgeeks.org/"},
            {"summary": "Learn Programming on TutorialsPoint", "link": "https://www.tutorialspoint.com/index.htm"},
            {"summary": "Practice Interview Questions on InterviewBit", "link": "https://www.interviewbit.com/practice/#"},
            {"summary": "Practice Technical Interview Questions on LeetCode", "link": "https://leetcode.com/problemset/all/"},
        ]
    },
    {
        "title": "Programming Guides",
        "links": [
            {"summary": "Learn Javascript", "link": "https://javascript.info/"},
            {"summary": "C++ Language Reference from Microsoft", "link": "https://learn.microsoft.com/en-us/cpp/cpp/cpp-language-reference?view=msvc-170"},
            {"summary": "Google Developers Machine Learning Courses", "link": "https://developers.google.com/machine-learning/"},
            {"summary": "Learn React in 30 Days!", "link": "https://www.30daysofreact.com/"},
            {"summary": "Learn Basic Python", "link": "https://www.learnpython.org/"},
            {"summary": "Rust Programming Guide", "link": "https://doc.rust-lang.org/book/"},
            {"summary": "Bash Reference Guide", "link": "https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html"},
            {"summary": "Learn SQL hands-on", "link": "https://sqlzoo.net/wiki/SQL_Tutorial"},
            {"summary": "I am AI expert Learning Roadmap", "link": "https://i.am.ai/roadmap/?utm_source=GitHub&utm_medium=Referral&utm_campaign=AI%20Expert%20Roadmap%20Interactive"},
        ]
    },
    {
        "title": "Algorithms",
        "links": [
            {"summary": "Algorithm of the day", "link": "https://dev.to/alisabaj/series/7067"},
            {"summary": "Sorting Algorithms Visualized", "link": "https://visualgo.net/en/sorting"},
            {"summary": "SortVisualizer", "link": "https://www.sortvisualizer.com/"},
        ]
    },
    {
        "title": "Interactive Learning",
        "links": [
            {"summary": "CSS Grid Pond Frog Game", "link": "http://cssgridgarden.com/"},
        ]
    },
    {
        "title": "Game Development",
        "links": [
            {"summary": "SDL Guide for Beginners", "link": "https://lazyfoo.net/tutorials/SDL/index.php"},
            {"summary": "Unity Learning Platform", "link": "https://learn.unity.com/"},
        ]
    },
    {
        "title": "Documentation",
        "links": [
            {"summary": "DevDocs Bundled API Glossary Interface", "link": "https://devdocs.io/"},
            {"summary": "MDN Web Developer Docs", "link": "https://developer.mozilla.org/en-US/"},
            {"summary": "Python Documentation", "link": "https://docs.python.org/3/c-api/index.html"},
            {"summary": "Java SE 8 API", "link": "https://docs.oracle.com/javase/8/docs/api/"},
            {"summary": "C++ Documentation", "link": "https://cplusplus.com/"},
            {"summary": "HTML Tag Reference", "link": "https://htmlreference.io/"},
            {"summary": "Java Swing API", "link": "https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/javax/swing/package-summary.html"},
            {"summary": "HTML Reference Guide", "link": "https://htmlreference.io/"},
        ]
    },
    {
        "title": "Tools",
        "links": [
            {"summary": "Javascript Array Explorer", "link": "https://sdras.github.io/array-explorer/"},
            {"summary": "A Wide Array of Web Dev Tools", "link": "https://www.browserling.com/tools/"},
            {"summary": "Ultimate Collection of Tools", "link": "https://onlinetools.com/?from=fam-png"},
            {"summary": "CSS Ultimate Selector Guide", "link": "https://drafts.csswg.org/selectors/"},
            {"summary": "OpenAI ChatGPT", "link": "https://chat.openai.com/"},
            {"summary": "Detexify Latex Symbols", "link": "https://detexify.kirelabs.org/classify.html"},
            {"summary": "Group Scheduling Website", "link": "https://whenisgood.net/"},
        ]
    },
    {
        "title": "Resources",
        "links": [
            {"summary": "CSS Tricks", "link": "https://css-tricks.com/"},
            {"summary": "Free Programming Textbooks", "link": "https://ebookfoundation.github.io/free-programming-books-search/"}
        ]
    },
    {
        "title": "Math",
        "links": [
            {"summary": "WolframAlpha Computational Intelligence", "link": "https://www.wolframalpha.com/"},
            {"summary": "Desmos Online Graphing Calculator", "link": "https://www.desmos.com/calculator"},
            {"summary": "Mathematical Symbol Reference", "link": "https://mathvault.ca/hub/higher-math/math-symbols/"}
        ]
    },
    {
        "title": "Music",
        "links": [
            {"summary": "Piano Scales Reference", "link": "https://www.pianoscales.org/"},
            {"summary": "Find Sounds for Free!", "link": "https://freesound.org/"},
        ]
    },
    {
        "title": "Interesting",
        "links": [
            {"summary": "Days of the Year", "link": "https://www.daysoftheyear.com/"},
            {"summary": "Googology Wiki", "link": "https://googology.fandom.com/wiki/Googology_Wiki"},
            {"summary": "Mensa Free Online IQ Test", "link": "https://www.mensa.org/public/mensa-iq-challenge"},
            {"summary": "Are you in the Average?", "link": "https://thanaverage.xyz/"},
            {"summary": "Endless Quiz", "link": "https://www.endquiz.com/quiz.php"},
        ]
    },
    {
        "title": "Networking",
        "links": [
            {"summary": "Who is my ISP?", "link": "https://www.whoismyisp.org"},
            {"summary": "UDP/TCP Port Search", "link": "https://wintelguy.com/port-search/"}
        ]
    },
    {
        "title": "Image Editing",
        "links": [
            {"summary": "Pixlr E Online Photo Editing", "link": "https://pixlr.com/e/"}
        ]
    }
];