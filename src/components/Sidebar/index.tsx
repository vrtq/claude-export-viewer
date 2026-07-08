import Links from "./Links";
import Header from "./Header";
import RecentChats from "./RecentChats";
import UserProfile from "./UserProfile";

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