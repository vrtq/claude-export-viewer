import { Link } from "react-router-dom"
export default function PageNotFound() {
    return (
        <div className="bg-background h-screen w-screen text-foreground font-serif">
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col items-center justify-center gap-2 pb-4">
                    <h1 className="text-xl">Page not found</h1>
                    <p className="text-foreground-secondary font-sans">Export viewer could not find this page</p>
                </div>
                <Link to="/" className="bg-foreground text-sans text-sm text-background rounded-lg p-2 pl-4 pr-4">
                    Go back home
                </Link>
            </div>
        </div>
    )
}