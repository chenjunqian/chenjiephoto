'use client'
import { useEffect, useState } from "react"
import ProjectCard, { ProjectCardProps } from "./ProjectCard";


export default function ProjectCardList() {

    const [projects, setProjects] = useState<ProjectCardProps[]>();

    useEffect(() => {
        setProjects([
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
            {
                title: "Project 1",
                description: "Project 1 description",
                id: "1",
                image: "https://www.kushiphotos.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTXRjSXdLUUthaGFFR1hXfGZsX3Rlc3RfQUJTekhkQkJtbUVkUW96VDhlQ2RHOUhC00YglQPaFz&w=1080&q=75"
            },
        ])
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