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
            console.log(matchedConversation)
            //console.log("Successfully loaded conversation!");
        })()
    }, [chatID]);

    return (
        <div className="w-full h-full flex flex-col">
            <ChatHeader title={conversationData?.name ?? "Loading..."} />
            <Conversation chatMessages={conversationData?.chat_messages ?? null} />
        </div>
    )
}

function ChatHeader({ title }: { title: string }) {
    return (
        <div className="font-sans h-16 p-2 px-4 bg-background w-full ">
            <h1 className="hover:bg-card w-fit p-1 px-2 rounded-md text-sm">{title}</h1>
        </div>
    )
}

function Conversation({ chatMessages } : { chatMessages: ChatMessage[] | null }) {
    if (!chatMessages) return;

    return (
        <div className="p-4 w-full h-full flex flex-col items-center justify-center overflow-auto ">
            <div className="max-w-3xl h-full w-full gap-4 ">
            {
                chatMessages.map(chatMessage => 
                    chatMessage.sender == "human"
                    ? <HumanChatBubble message={chatMessage} />
                    : <AssistantChatBubble  message={chatMessage} />
                )
            }
            </div>
        </div>
    )
}

function HumanChatBubble({ message } : { message: ChatMessage }) {
    return (
        <div className="w-fit max-w-4/5 ml-auto font-sans bg-accent p-3 rounded-xl text-sm md:text-base">
            <p>{message.text}</p>
        </div>
    )
}

function AssistantChatBubble({ message } : { message: ChatMessage })  {
    return (
        <div className="max-w-4/5 p-4 text-sm md:text-base">
            <p>{message.text}</p>
        </div>
    )
}