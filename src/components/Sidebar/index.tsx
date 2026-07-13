import Links from "./Links";
import Header from "./Header";
import RecentChats from "./RecentChats";
import UserProfile from "./UserProfile";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className={"bg-sidepanel w-full h-full border-r border-r-border flex flex-col" + (!isOpen ? " w-14! overflow-hidden" : "")}>
            <Header openState={{isOpen, setIsOpen}} />
            <Links openState={{isOpen, setIsOpen}} />
            {
                isOpen &&
                <>
                    <RecentChats />
                    <UserProfile />
                </>
            }
        </nav>
    )
}