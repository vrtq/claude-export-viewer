import { Link } from "react-router-dom"

export default function Links({ 
    openState
}: {
    openState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}}) {
    const { isOpen } = openState;
    console.log("isOpen:", isOpen)
    return (
        <div className="w-full flex flex-col gap-1 font-sans text-sm p-3">
            <SidebarLink to="import">
                <div className="size-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" className="bg-card rounded-full p-0.5">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12l7-7l7 7m-7 7V5"></path>
                    </svg>
                </div>
                { isOpen && <p className="h-0">Import chats</p> }
            </SidebarLink>      
            <SidebarLink to="recents">
                <div className="size-5 text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 256">
                        <path fill="currentColor" d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86ZM62 159.5a8.3 8.3 0 0 0-2.26.32L32 168l8.17-27.76a8 8 0 0 0-.63-6A64 64 0 1 1 65.8 160.5a8 8 0 0 0-3.8-1m153.79 28.73L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04Z"></path>
                    </svg>
                </div>
                { isOpen && <p>Chats</p> }
            </SidebarLink>
            <SidebarLink to="projects">
                <div className="size-5 text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 1024 1024">
                        <path fill="currentColor" d="M128 384v448h768V384zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32m64-128h704v64H160zm96-128h512v64H256z"></path>
                    </svg>
                </div>
                { isOpen && <p>Projects</p> }
            </SidebarLink>
        </div>
    )
}

function SidebarLink({ children, to } : { 
    to: string; 
    children: React.ReactNode;
 }) {
    return (
        <Link to={to} className="flex flex-row gap-4 w-full hover:bg-accent p-1.5 rounded-xl hover:text-foreground text-foreground-secondary">
            { children }
        </Link>
    )
}