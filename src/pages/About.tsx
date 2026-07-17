export default function About() {
    return (
        <div className="p-8 w-full bg-background h-full flex flex-col items-center overflow-auto ">
            <div className="flex flex-col h-full w-3/4 lg:w-2/3 font-sans">
                <h1 className="text-2xl font-serif">About</h1>
                <hr className="mt-4 mb-4" />
                <p>This is a frontend-only viewer for your exported Claude.ai conversation data. Export your data from Claude, drag and drop or upload the conversations.json, and browse your conversations in a UI that feels familiar.</p>
                <br/><br/>
                <h2 className="text-lg font-serif text-foreground-secondary pt-4">Features</h2>
                <ul className="p-4 leading-8 list-disc">
                    <li>Drag-and-drop loading of your Claude data export.</li>
                    <li>Full markdown rendering, including code blocks</li>
                    <li>Search across your conversations</li>
                    <li>Shows projects</li>
                    <li>Shows attachment names (note: the export doesn't include actual attachment files, so those aren't viewable - just referenced)</li>
                    <li>Clean, familiar UI - built to feel like the real thing</li>
                </ul>
                <br/><br/>
                <h2 className="text-lg font-serif text-foreground-secondary pt-4 pb-2">Privacy</h2>
                <p>Your data belongs to you.
                <br/><br/>
                The application does not collect personal information, upload your conversations, or track your activity. Everything is processed locally whenever possible.</p>
                <h2 className="text-lg font-serif text-foreground-secondary pt-4 pb-2">Open Source</h2>
                <p>This project is community-developed and welcomes feedback, bug reports, and contributions.</p>
                <h2 className="text-lg font-serif text-foreground-secondary pt-4 pb-2">Disclaimer</h2>
                <p>This project is <span className="font-semibold">not affiliated with, endorsed by, or sponsored  by Anthropic</span>. "Anthropic," "Claude," and related trademarks are the property of Anthropic, PBC and are used solely to identify the export format supported by this application.
                <br/><br/>
                This software is provided "as is" without warranties of any kind.</p>
            </div>
        </div>
    )
}