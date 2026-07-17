import { Link } from "react-router-dom"

export default function Help() {
    return (
        <div className="p-8 w-full bg-background h-full flex flex-col items-center overflow-auto ">
            <div className="flex flex-col h-full w-3/4 lg:w-2/3">
                <h1 className="text-2xl font-serif">Frequently Asked Questions</h1>
                <Section>
                    <SectionTitle>How do I import my conversation?</SectionTitle>
                    <SectionDescription>
                        Importing your conversations is quick and straightforward:
                        <ul className="p-4 leading-8 list-decimal">
                            <li>Go to the <Link to="/import" className="text-foreground-secondary">Import Chats</Link> page.</li>
                            <li>Select or drag and drop your <code>conversations.json</code> file into the upload area.</li>
                            <li>Click <span className="font-semibold">submit</span> to begin the import.</li>
                       </ul>
                       Once the import is complete, your conversations will be available in the viewer. If they don't appear immediately, refresh the page to load the latest data.
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>How do I import other data (projects, user data, memories, etc.)?</SectionTitle>
                    <SectionDescription>
                        You can also import other files through the exports page, such as projects, user data, memories, and additional supported export files.
                        <br/><br/>
                        To import them:
                        <ul className="p-4 leading-8 list-decimal">
                            <li>Go to the <Link to="/import" className="text-foreground-secondary">Import Chats</Link> page.</li>
                            <li>Drag and drop the file you want to import (or browse to select it).</li>
                            <li>Click <span className="font-semibold">submit</span>.</li>
                       </ul>
                       The application will automatically recognize supported files and import the relevant information. If a file isn't currently supported, it will simply be ignored without affecting your existing data.
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Does anyone else see my data?</SectionTitle>
                    <SectionDescription>
                        No.
                        <br/><br/>
                        Your data remains on your device. The application does not upload your conversations or export files to external servers, and no one else can access your imported data unless they already have access to your device.
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>What data do you collect?</SectionTitle>
                    <SectionDescription>
                        None. 
                        <br/><br/>
                        The application does not collect analytics, conversation history, usage metrics, or personal information. Everything is processed locally in your browser or local environment.
                        <br/><br/>
                        Because your data never leaves your device, you remain in control of your exports at all times.
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Are you affiliated with Anthropic?</SectionTitle>
                    <SectionDescription>
                        No.
                        <br/><br/>
                        This is an independent, community-built project designed to help users browse and search their exported data more conveniently. It is not created, endorsed, sponsored, or affiliated with Anthropic or any of its products or services.
                        <br/><br/>
                        Any trademarks, product names, or company names referenced remain the property of their respective owners.
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Where is my data stored?</SectionTitle>
                    <SectionDescription>Your imported data is stored locally in your browser (<code>IndexDB</code> for conversations, and <code>localStorage</code> for other data). It is not uploaded to a remote server.</SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Which export formats are supported?</SectionTitle>
                    <SectionDescription>Currently the viewer supports official export files. If your export format changes or you're using an unsupported file, some data may not import correctly.</SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Can I search my conversations?</SectionTitle>
                    <SectionDescription>Yes. Head to the <Link to="/recents" className="text-foreground-secondary">Recent Chats</Link> page to find conversations, messages, or keywords across your imported data.</SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Does the viewer modify my files?</SectionTitle>
                    <SectionDescription>No. Your original export files are never changed. The application only reads them to display the contents.</SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Can I delete imported data?</SectionTitle>
                    <SectionDescription>Yes. You can clear your imported data at any time. Since everything is stored locally, deleting it only affects your own device.</SectionDescription>
                </Section>
                <div className="pb-24"></div>
            </div>
        </div>
    )
}

function Section({ children } : { children?: React.ReactNode}) {
    return (
        <>
            <hr className="mt-4 mb-4" />
            <div className="">
                {children}
            </div>  
        </>
    )
}

function SectionTitle({ children } : { children?: React.ReactNode}) {
    return <h2 className="text-lg text-muted-foreground">{children}</h2>
}

function SectionDescription({ children } : { children?: React.ReactNode}) {
    return  <p className="pt-2 font-sans">{children}</p>
}