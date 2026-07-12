import { useEffect, useState } from "react";
import type { Project } from "@/types";

export default function Projects() {
    
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="p-8 w-full bg-background h-full flex flex-col items-center ">
            <div className="flex flex-col h-full w-3/4 lg:w-2/3">
                <Header setSearchQuery={setSearchQuery} />
                <ProjectList searchQuery={searchQuery} />
            </div>
        </div>    
        )
}

function Header({ setSearchQuery }: { setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className="w-full flex flex-col font-sans gap-4 bg-background p-2">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-serif">Projects</h1>
            </div>
            <SearchBox setSearchQuery={setSearchQuery} />
        </div>
    )
}

function SearchBox({ setSearchQuery }: { setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) {
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const debounce = setTimeout(() => {
            setSearchQuery(searchInput);
        }, 400);

        return () => {
            clearTimeout(debounce);
        }
    }, [searchInput, setSearchQuery]);

    return (
        <div className="w-full h-12 bg-card rounded-xl p-2 px-4 gap-4  flex flex-row text-muted-foreground items-center focus-within:outline-1 focus-within:outline-[#2a78d6] focus-within:border focus-within:border-black focus-within:shadow-[0px_0px_4px_#2a78d6] ">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                </g>
            </svg>
            <input value={searchInput} type="text" className="text-foreground text-sm w-full" placeholder="Search projects..." 
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
        </div>
    )
}

function ProjectList({ searchQuery }: { searchQuery: string }) {
    const [projects, setProjects] = useState<Project[]>(fetchProjects);

    function fetchProjects(): Project[] {
        return JSON.parse(localStorage.getItem("projects") ?? "[]");
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-2">
            {
                projects.map(project => 
                    <ProjectCard project={project} />
                )
            }
        </div>
    )
}

function ProjectCard({ project } : { project: Project}) {
    return (
        <div className="bg-project-card-background border border-border h-36 p-4 text-sm rounded-xl font-sans flex flex-col justify-between hover:bg-card hover:cursor-pointer">
            <h2>{project.name}</h2>
            <p className="text-foreground-secondary">{project.description}</p>
            <p className="text-muted-foreground">Updated {new Date(project.updated_at).toLocaleDateString()}</p>
        </div>
    )
}