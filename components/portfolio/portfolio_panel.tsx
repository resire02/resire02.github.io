import react from "react"


export default function PortfolioPanel({ children }: { children: React.JSX.Element | Array<React.JSX.Element> }): React.JSX.Element {
    return (
        <div className="m-4 p-5 bg-black border-white border-2 text-white rounded-xl shadow-xl shadow-black">
            {children}
        </div>
    );
}