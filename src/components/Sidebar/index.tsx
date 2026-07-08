export default function Sidebar() {
    return (
        <nav className="bg-sidepanel w-full h-full p-3 border-r border-r-border flex flex-col gap-6 ">
            <Header />
            <Links />
            <RecentChats />
            <UserProfile />
        </nav>
    )
}

function Header() {
    return (
        <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-normal">Exports</h2>
            <div className="text-muted-foreground flex flex-row gap-4">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="m21 21l-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </g>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 3v18" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

function Links() {
    return (
        <div className="w-full flex flex-col gap-2 font-sans text-lg">
            <a href="import" className="flex flex-row gap-6 w-full">
                <div className="size-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" className="bg-card text-muted-foreground rounded-full p-0.5">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12l7-7l7 7m-7 7V5"></path>
                    </svg>
                </div>
                <p className="text-muted-foreground">Import Chats</p>
            </a>      
            <a href="" className="flex flex-row gap-6 w-full">
                <div className="size-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 256 256">
                        <path fill="currentColor" d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86ZM62 159.5a8.3 8.3 0 0 0-2.26.32L32 168l8.17-27.76a8 8 0 0 0-.63-6A64 64 0 1 1 65.8 160.5a8 8 0 0 0-3.8-1m153.79 28.73L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04Z"></path>
                    </svg>
                </div>
                <p className="text-muted-foreground">Chats</p>
            </a>
        </div>
    )
}

function RecentChats() {
    return (
        <div className="text-muted-foreground font-sans">
            <p className="text-muted-foreground/75 text-sm p-2 pl-0">Recents</p>
            <ul className="pt-2">
                <li>Nothing yet...</li>
            </ul>
        </div>
    )
}

function UserProfile() {
    return (
        <></>
    )
}