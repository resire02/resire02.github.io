import React from "react";

export default function SplitView({ children }: { children: Array<React.JSX.Element> }) {
    return (
        <div className="grid grid-cols-2 sm:grid-rows-2">
            {children}
        </div>
    );
}