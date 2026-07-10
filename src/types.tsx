export type Conversation = {
    uuid: string;
    name: string;
    summary: string;
    created_at: string;
    updated_at: string;
    account: {
        uuid: string;
    };
    chat_messages: ChatMessage[];
}

export type Sender = "human" | "assistant";

export type ChatMessage = {
    uuid: string;
    text: string;
    created_at: string;
    content: ChatMessageContent[]
    sender: Sender;
    updated_at: string;
    attachments: ChatMessageAttachment[];
    files: ChatMessageFile[];
    parent_message_uuid: string;
}

export type ChatMessageContent = {
    start_timestamp:string;
    stop_timestamp: string;
    flags: unknown;
    type: string;
    text: string;
    citations: ChatMessageCitation[];
}

export type ChatMessageCitation = {
    start_index: number;
    end_index: number;
    uuid: string;
    details: {
        type: string;
        url: string;
    }
}

export type ChatMessageFile = {
    file_uuid: string;
    file_name: string;
}

export type ChatMessageAttachment = {
    extracted_content: string;
    file_name: string;
    file_size: number;
    file_type: string;
}