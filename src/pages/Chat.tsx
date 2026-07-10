import type { Conversation, ChatMessage, ChatMessageAttachment } from "@/types";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { get } from "idb-keyval";
import { marked } from "marked";

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
            {
                conversationData && <title>{conversationData?.name}</title>
            }
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
        <div className="p-4 bg-background overflow-x-hidden w-full h-full flex flex-col items-center justify-center overflow-auto ">
            <div className="max-w-3xl h-full w-full gap-4 [&_li]:p-1 [&_ul]:list-disc [&_ul]:pl-6">
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
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divRef.current) return;

        (async () => {
            if (!divRef.current) return;

            divRef.current.innerHTML = await marked.parse(message.text);
        })()
    }, [message.text]);

    return (
        <>
        {
            message.text &&
            <div ref={divRef} className="w-fit max-w-4/5 ml-auto font-sans bg-accent p-3 rounded-xl text-sm md:text-base last:pb-32">
                {/** Rendered markdown goes here */}
            </div>
        }
        {
            message.attachments &&
            <Attachments files={message.attachments} />
        }
        </>
    )
}

function AssistantChatBubble({ message } : { message: ChatMessage })  {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divRef.current) return;

        (async () => {
            if (!divRef.current) return;

            divRef.current.innerHTML = await marked.parse(message.text);
        })()
    }, [message.text]);

    return (
        <div className="w-fit max-w-sm md:max-w-4/5 p-4 text-sm md:text-base font-light flex flex-col gap-4 last:pb-32" ref={divRef}>
            {/** Rendered markdown goes here */}
        </div>
    )
}

function Attachments({ files} : { files: ChatMessageAttachment[] }) {
    return (
        <div className="w-fit max-w-sm md:max-w-4/5 ml-auto font-sans p-2 rounded-xl text-sm md:text-base flex flex-row gap-2 ">
            {
                files.map(file => 
                    <div className="border border-border text-foreground-secondary bg-card p-2 rounded-xl flex flex-row gap-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 6l-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                        </svg>
                        <p className="text-muted-foreground select-none">{file.file_name}</p>
                    </div>
                )
            }
        </div>
    )
}