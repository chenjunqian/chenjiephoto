import ProjectCard from "./ProjectCard";
import project_detail from "../public/home/project_detail.json"


export default function ProjectCardList() {

    const projects = project_detail.projects

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