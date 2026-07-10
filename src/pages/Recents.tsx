import { type Conversation } from "@/types";
import { get } from "idb-keyval";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recents() {
    return (
        <div className="p-8 w-full bg-background h-full flex flex-col items-center ">
            <div className="flex flex-col h-full w-3/4 lg:w-2/3">
                <Header />
                <ChatList />
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="w-full flex flex-col font-sans gap-4 bg-background p-2">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-serif">Chats</h1>
                <button className="bg-card p-2 px-4 rounded-xl ">
                    <span className="text-foreground-secondary">Filter by ...</span>
                </button>
            </div>
            <SearchBox />
        </div>
    )
}

function SearchBox() {
    return (
        <div className="w-full h-12 bg-card rounded-xl p-2 px-4 gap-4  flex flex-row text-muted-foreground items-center focus-within:outline-1 focus-within:outline-[#2a78d6] focus-within:border focus-within:border-black focus-within:shadow-[0px_0px_4px_#2a78d6] ">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                </g>
            </svg>
            <input type="text" className="text-foreground text-sm" placeholder="Search Chats..." />
        </div>
    )
}

function ChatList() {
    const [recentChats, setRecentChats] = useState<Conversation[]>([]);

    useEffect(() => {
        (async () => {
            const conversations: Conversation[] = await get('conversations') ?? [];
            setRecentChats(conversations.sort((a, b) =>
                new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                ))
        })();
    }, []);

    return (
        <div className="h-full w-full overflow-y-auto">
            <ul className="h-full w-full p-4 font-sans">
                {
                    recentChats.length > 0
                    ? recentChats.map(chat => <Chat data={chat} /> )
                    : <li key="nothing" className="text-foreground-secondary">Nothing yet...</li>
                }
            </ul>
        </div>
    )
}

function Chat({ data }: { data: Conversation; }) {
    return (
        <li className="peer border-t-card border-t first:border-t-0 hover:border-0 [.peer:hover+&]:border-0 ">
            <Link to={`/chat/${data.uuid}`} className="flex flex-row p-2 justify-between rounded-md hover:bg-card">
                <p className="">{data.name}</p>
                <p className="text-muted-foreground text-sm">{new Date(data.updated_at).toLocaleDateString()}</p>
            </Link>
        </li>
    )
}