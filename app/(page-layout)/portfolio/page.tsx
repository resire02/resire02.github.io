import PortfolioPanel from "@/components/portfolio/portfolio_panel";
import react from "react";




export default function PortfolioPage(): React.JSX.Element {
    const headerStyle: string = "text-4xl text-golden";
    return (
        <main className="min-h-screen grid grid-cols-2 gap-4">
            <PortfolioPanel>
                <h1 className={headerStyle}>Felix Leong</h1>
                <p>
                    I am a senior Software Engineering college student seeking a full-time job in software development, full stack development, and cloud eningeering.
                </p>
            </PortfolioPanel>
            <PortfolioPanel>
                <h1 className={headerStyle}>Work Experience</h1>
            </PortfolioPanel>
            <PortfolioPanel>
                <h1 className={headerStyle}>Personal Projects</h1>
            </PortfolioPanel>
        </main>
    );
}