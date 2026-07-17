import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "@/contexts/ThemeContext";
import Home from "@/pages/Home"
import Import from "@/pages/Import"
import PageNotFound from "@/pages/PageNotFound"
import Chat from "@/pages/Chat"
import Recents from "@/pages/Recents"
import Projects from "@/pages/Projects"
import Help from "@/pages/Help"
import About from "@/pages/About"
import Sidebar from "@/components/Sidebar"

export default function App() {
    const loadedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState<Theme>(loadedTheme === "dark" ? loadedTheme : "light");
    
    useEffect(() => {
        document.documentElement.classList = (theme === "dark") ? "dark" : "light";
        localStorage.setItem("theme", (theme === "dark" ? "dark" : "light"))
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/import" element={<Import />} />
                        <Route path="/chat/:id" element={<Chat />} />
                        <Route path="/recents" element={<Recents />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

function Layout() {
    return (
        <div className="font-serif bg-background text-foreground flex flex-row w-screen h-screen">
            <div className="w-48 lg:w-[18rem]">
                <Sidebar />
            </div>
            <Outlet />
        </div>
    )
}