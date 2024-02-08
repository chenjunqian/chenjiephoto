'use client'
import { useEffect, useState } from "react"
import ProjectCard, { ProjectCardProps } from "./ProjectCard";


export default function ProjectCardList() {

    const [projects, setProjects] = useState<ProjectCardProps[]>();

    useEffect(() => {
        const getProjectDetail = async () => {
            const resp = await fetch(`/home/project_detail.json`)
            const respJson = await resp.json()
            setProjects(respJson.projects)
        }
        getProjectDetail()
    })

    return (
        <div className="w-full flex justify-center pl-6 pr-6 pt-28">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        projects && projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}