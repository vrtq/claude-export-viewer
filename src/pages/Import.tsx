import { useRef, useState } from "react"
import { FileUploader } from "react-drag-drop-files";
import { set } from "idb-keyval";

export default function Import() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[] | null>(null);

    function handleSubmit() {
        if (!files) {
            console.error("No file submitted.");
            return;
        }

        // Verify all files are JSON files
        for (const file of files) {
            if (file.type != "application/json") { 
                console.error("Only JSON files allowed!");
                return;
            }
        }

        console.log("File passed!");
        
        // Parse files
        for (const file of files) {
            (async () => {
               await parseFile(file);
            })();
        }
    }

    async function parseFile(file: File) {
        const parsedData = JSON.parse(await file.text());

        // Finish parsing data and writing to correct 
        if (Array.isArray(parsedData)) {
            console.log("it is an array1");
            const firstEntry = parsedData[0];

            if (firstEntry?.chat_messages) {
                // This is the users conversations
                set("conversations", (parsedData));
            } 
            else if (firstEntry?.conversations_memory) {
                // This is memory
                localStorage.setItem("memory", JSON.stringify(parsedData));
            }
            else if (firstEntry?.email_address) {
                // This is user data
                localStorage.setItem("userData", JSON.stringify(parsedData));
            }
            else {
                // None of the above
                console.log("Could not find corresponding role.");
            }
        } 

        if (parsedData?.docs) {
            // This is a project
            const prevProjects = JSON.parse(localStorage.getItem("projects") ?? "[]") ?? [];
            localStorage.setItem("projects", JSON.stringify([...prevProjects, parsedData]));
        }
    }

    return (
        <div className="bg-background w-full h-full p-8">
            { /* Centered */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                { /* Import text */}
                <div className="flex flex-col items-center gap-4 p-8">
                    <h1 className="text-4xl lg:text-5xl text-foreground-secondary font-thin">Import Conversation</h1>
                    { /** Selected file info */}
                    <span className="flex flex-row w-full justify-between items-center">
                        <p className="font-sans text-foreground-secondary">
                            Selected file: {' '}
                            <span className="font-medium text-muted-foreground">
                                {
                                    files
                                    ? files[0].name
                                    : "none"
                                }
                            </span>
                        </p>
                        <button className="bg-card text-foreground p-2 rounded-xl text-sm active:scale-90 hover:bg-card-secondary"
                        onClick={handleSubmit}
                        >Submit</button>
                    </span>
                </div>
                
                { /* Import box */}
                <input type="file" accept=".json" className="hidden" ref={inputRef} 
                onChange={(e) => {
                    if (!e.currentTarget?.files) {
                        return;
                    }

                    const newFiles: File[] = [];

                    for (const file of e.currentTarget.files) {
                        newFiles.push(file);
                    }

                    setFiles(newFiles);
                }}
                />
                <FileUploader
                    handleChange={(file) => {
                        const toArray = (input: File | File[]): File[] => Array.isArray(input) ? input : [input];
                        setFiles(toArray(file));
                    }} 
                >
                    <div className="w-80 h-64 lg:w-lg border-border border-2 border-dotted rounded-2xl p-4 flex flex-row items-center justify-center gap-4 text-foreground-secondary"
                    onClick={() => {
                        if (!inputRef.current) {
                            return;
                        }

                        inputRef.current.click();
                    }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5m-8 4v6m3-3l-3-3l-3 3"></path>
                            </g>
                        </svg>
                        <p className="text-muted-foreground font-sans">Select or drop .json files</p>
                    </div>
                </FileUploader>
            </div>
        </div>    
    )
}