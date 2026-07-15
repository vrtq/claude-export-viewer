import { Link } from "react-router-dom";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Header({ 
    openState
}: {
    openState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}}) {
    const {isOpen, setIsOpen} = openState;
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    const {theme, setTheme} = context;

    return (        
        <div className={"flex flex-row justify-between p-3" + (isOpen ? "" : " justify-center!" ) }>
            <Link hidden={!isOpen} to="/" className="text-xl font-normal">Exports</Link>
            { /** Buttons */}
            <div className="text-foreground-secondary flex flex-row gap-2">
                { /** Theme button */}
                <button hidden={!isOpen} className="p-1 rounded-sm hover:cursor-pointer hover:bg-card-secondary hover:text-foreground "
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                }}>
                {
                    theme === "dark" 
                    ? <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                            <circle cx={12} cy={12} r={4}></circle>
                            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                        </g>
                    </svg>
                }
                </button>
                { /** Search button */}
                <button hidden={!isOpen} className="p-1 rounded-sm hover:cursor-pointer hover:bg-card hover:text-foreground ">
                    <Link to="/recents" className="w-full h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="m21 21l-4.34-4.34" />
                                <circle cx="11" cy="11" r="8" />
                            </g>
                        </svg>
                    </Link>
                </button>
                { /** Hide sidebar button */}
                <button className="p-1 rounded-sm hover:cursor-pointer hover:bg-card hover:text-foreground"
                onClick={() => {
                    setIsOpen(prev => !prev);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 3v18" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}