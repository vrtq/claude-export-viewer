import { type Conversation } from "@/types";
import { get } from "idb-keyval";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecentChats() {
    const [recentChats, setRecentChats] = useState<Conversation[]>([]);

    useEffect(() => {
        (async () => {
            const conversations: Conversation[] = await get('conversations') ?? [];
            setRecentChats(conversations)
        })();
    }, []);

    return (
        <div className="text-muted-foreground font-sans h-full overflow-y-auto overflow-x-visible">
            <p className="text-muted-foreground/75 text-xs p-2 pl-0">Recents</p>
            <ul className="flex flex-col -mt-2 ">
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
        <li key={data.uuid} className="mt-1 py-1 pr-2 text-foreground-secondary rounded-lg hover:bg-accent hover:text-foreground">
            <Link to={`/chat/${data.uuid}`}>
                <p className="text-sm  pl-2 overflow-hidden text-ellipsis truncate ">{data.name}</p>
            </Link>
        </li>
    )
}