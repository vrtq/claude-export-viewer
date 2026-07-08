export default function Sidebar() {
    return (
        <nav className="bg-sidepanel w-full h-full p-2 border-r border-r-border ">
            <div className="flex flex-row justify-between">
                <h2 className="text-xl font-normal">Claude</h2>
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
        </nav>
    )
}