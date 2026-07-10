import { get } from "idb-keyval";
import { useEffect, useState } from "react";

export default function RecentChats() {
    const [recentChats, setRecentChats] = useState([]);

    useEffect(() => {
        (async () => {
            //setRecentChats(await get('conversations'))
        })();

    }, []);

    return (
        <div className="text-muted-foreground font-sans">
            <p className="text-muted-foreground/75 text-sm p-2 pl-0">Recents</p>
            <ul className="pt-2 text-foreground-secondary">
                <li>Nothing yet...</li>
            </ul>
        </div>
    )
}