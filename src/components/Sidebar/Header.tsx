import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex flex-row justify-between">
            <Link to="/" className="text-2xl font-normal">Exports</Link>
            <div className="text-muted-foreground flex flex-row gap-4">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="m21 21l-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </g>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
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