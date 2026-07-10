export default function Recents() {
    return (
        <div className="p-8 w-full bg-background h-full flex flex-col items-center ">
            <div className="w-3/4 lg:w-1/2">
                <Header />
                <ChatList />
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="w-full flex flex-col font-sans gap-4">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-serif">Chats</h1>
                <button className="bg-card p-2 px-4 rounded-xl ">
                    <span className="text-foreground-secondary">Filter by ...</span>
                </button>
            </div>
            {/** Search box */}
            <div className="w-full h-12 bg-card rounded-xl p-2 px-4 gap-4  flex flex-row text-muted-foreground items-center focus-within:outline-1 focus-within:outline-[#2a78d6] focus-within:border focus-within:border-black focus-within:shadow-[0px_0px_4px_#2a78d6] ">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle cx={11} cy={11} r={8}></circle>
                    </g>
                </svg>
                <input type="text" className="text-foreground text-sm" placeholder="Search Chats..." />
            </div>
        </div>
    )
}

function ChatList() {
    return (
        <></>
    )
}