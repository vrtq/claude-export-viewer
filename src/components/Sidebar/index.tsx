import Links from "./Links";
import Header from "./Header";
import RecentChats from "./RecentChats";
import UserProfile from "./UserProfile";

export default function Sidebar() {
    return (
        <nav className="bg-sidepanel w-full h-full border-r border-r-border flex flex-col">
            <Header />
            <Links />
            <RecentChats />
            <UserProfile />
        </nav>
    )
}