import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Home from "@/pages/Home"
import Import from "@/pages/Import"
import PageNotFound from "@/pages/PageNotFound"
import Sidebar from "./components/Sidebar"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/import" element={<Import />} />
                </Route>
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

function Layout() {
    return (
        <div className="font-serif bg-background text-foreground flex flex-row w-screen h-screen">
            <div className="w-[18rem] lg:w-92">
                <Sidebar />
            </div>
            <Outlet />
        </div>
    )
}