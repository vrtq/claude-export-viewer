import type { Conversation, ChatMessage } from "@/types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "idb-keyval";

export default function Chat() {
    const location = useLocation();
    const chatID = location.pathname.split('/').at(-1);
    const [conversationData, setConversationData] = useState<Conversation | null>(null);

    // Load conversation data
    useEffect(() => {
        (async () => {
            const loadedData = await get("conversations") as Conversation[];
            
            if (loadedData == null) {
                console.error("Could not load conversation data.");
                return;
            }

            const matchedConversation = loadedData.find(conversation => conversation.uuid === chatID);

            if (!matchedConversation) {
                console.error("Could not find conversation.");
                return;   
            }

            setConversationData(matchedConversation);
            //console.log("Successfully loaded conversation!");
        })()
    }, [chatID]);

    return (
        <div className="w-full h-full">
            <ChatHeader title={conversationData?.name ?? "Loading..."} />
        </div>
    )
}

function ChatHeader({ title }: { title: string }) {
    console.log("title: ", title)
    return (
        <div className="font-sans h-16 p-2 px-4 bg-background w-full ">
            <h1 className="hover:bg-card w-fit p-1 px-2 rounded-md text-sm">{title}</h1>
        </div>
    )
}

function Conversation() {

}
