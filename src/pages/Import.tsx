export default function Import() {
    return (
        <div className="bg-background w-full h-full p-8">
            { /* Centered */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                { /* Welcome text */}
                <div className="flex flex-row items-center gap-4 p-8">
                    <h1 className="text-4xl lg:text-5xl text-foreground-secondary font-thin">Import Conversation</h1>
                </div>
                { /* Import box */}
                <input type="file" accept=".json" className="hidden" />
                <div className="w-80 h-64 lg:w-lg border-border border-2 border-dotted rounded-2xl p-4 flex flex-row items-center justify-center gap-4 text-foreground-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5m-8 4v6m3-3l-3-3l-3 3"></path>
                        </g>
                    </svg>
                    <p className="text-muted-foreground font-sans">Select or drop .json files</p>
                </div>
            </div>
        </div>    
    )
}