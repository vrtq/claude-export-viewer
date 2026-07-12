import { useEffect, useState } from "react";
import type { UserData } from "@/types";

export default function UserProfile() {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const loadedData = localStorage.getItem("userData");

        if (!loadedData) {
            console.error("Could not find user data");
            return;
        }

        setUserData(JSON.parse(loadedData ?? "{}")[0]);
    }, []);

    return (
        <div className="h-20 w-full border-t border-t-border p-3 hover:bg-accent font-sans text-foreground-secondary hover:cursor-pointer">
            <div className="w-full h-full flex flex-row items-center justify-start gap-4">
                <div className="bg-foreground-secondary h-10 w-10 rounded-full flex items-center justify-center">
                    <p className="text-background text-lg font-semibold">{userData?.full_name[0] ?? "A"}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-sm">{userData?.full_name ?? "Anonymous"}</h2>
                    <p className="text-xs text-muted-foreground">Export View</p>
                </div>
            </div>
        </div>
    )
}