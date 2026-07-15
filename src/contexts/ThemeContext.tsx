import { createContext } from "react";

export type Theme = "dark" | "light";

export type ThemeState = {
    theme: Theme; 
    setTheme: React.Dispatch<React.SetStateAction<Theme>>; 
}
export const ThemeContext = createContext<ThemeState | null>(null);