import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { get } from "idb-keyval";
import type { Conversation } from "@/types";

export default function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    return (
        <div className="bg-background w-full h-full p-8">
            { /* Centered */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                { /* Welcome text */}
                <div className="flex flex-row items-center gap-4 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} viewBox="0 0 1080 1080" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
                    <g transform="matrix(1.204159 0 0 0.756913 -120.046216 47.96675)">
                        <circle cx={548.139} cy={650.052} r={330.157} fill="rgb(217,119,87)" />
                    </g>
                    <g transform="translate(141.900393 -60.51114)">
                        <path fill="white" d="M398.1,403.408C506.884,403.408 595.203,491.727 595.203,600.511C595.203,709.296 506.884,797.615 398.1,797.615C289.315,797.615 200.996,709.296 200.996,600.511C200.996,491.727 289.315,403.408 398.1,403.408ZM398.1,525.445C439.53,525.445 473.166,559.081 473.166,600.511C473.166,641.941 439.53,675.578 398.1,675.578C356.669,675.578 323.033,641.941 323.033,600.511C323.033,559.081 356.669,525.445 398.1,525.445Z" />
                    </g>
                </svg>
                    <h1 className="text-4xl lg:text-5xl text-foreground-secondary font-thin">Hello, User</h1>
                </div>
                { /* Search box */}
                <div className="w-92 lg:w-lg bg-card rounded-2xl p-4">
                    <input type="text" value={query} className="text-muted-foreground font-sans w-full" placeholder="What are you searching for today?"
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key != "Enter") {
                            return;
                        }

                        navigate(`/recents/?q=${query}`);
                    }}/>
                </div>
                { /* Option Buttons */}
                <div className="font-sans text-foreground text-sm font-normal flex items-center gap-2">
                    <OptionButton onClick={async () => {
                        const conversations: Conversation[] = await get("conversations") ?? [];
                        
                        if (!conversations) {
                            console.error("Could not load conversations");
                            return;
                        }

                        const randomIndex = Math.floor(Math.random() * conversations.length);
                        navigate(`/chat/${conversations[randomIndex].uuid}`);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.17 7.83L2 22m2.02-10a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12m3.83-4.17l8.34 8.34"></path>
                        </svg>
                        <p className="text-foreground">Random</p>
                    </OptionButton>
                    <OptionButton>
                        <Link to="/help" className="w-full h-full flex flex-row items-center justify-center gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" className="text-muted-foreground">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path stroke-linecap="round" d="M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5" />
                                </g>
                            </svg>
                            <p className="text-foreground">Help</p>
                        </Link>
                    </OptionButton>
                    <OptionButton>
                        <Link to="/disclaimer" className="w-full h-full flex flex-row items-center justify-center gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 8v4m0 4h.01"></path>
                                </g>
                            </svg>
                            <p className="text-foreground">Disclaimer</p>
                        </Link>
                    </OptionButton>
                    <OptionButton>
                        <Link to="https://claude.ai" className="w-full h-full flex flex-row items-center justify-center gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                            <p className="text-foreground">Claude.ai</p>
                        </Link>
                    </OptionButton>
                </div>
            </div>
        </div>    
    )
}

function OptionButton({ children, onClick } : { children?: React.ReactNode, onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined}) {
    return (
        <button onClick={onClick} className="h-10 text-muted-foreground bg-card-secondary p-2 rounded-lg flex flex-row items-center justify-center gap-2 hover:bg-foreground-secondary/25 hover:cursor-pointer">
            { children }
        </button>
    )
}