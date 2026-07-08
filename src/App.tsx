import Sidebar from "./components/Sidebar"
import ChatPane from "./components/ChatPane"

export default function App() {
    return (
        <div className="font-serif font-thin bg-background text-foreground flex flex-row w-screen h-screen">
            <div className="w-[18rem] lg:w-92">
                <Sidebar />
            </div>
            <div className="w-full">
                <ChatPane />
            </div>
        </div>
    )
}