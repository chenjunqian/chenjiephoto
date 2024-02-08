import { ProjectCardProps } from "@/components/ProjectCard";
import Header from "@/components/header";
import { promises as fs } from 'fs';

export default async function Project({ params }: { params: { projectId: string } }) {

    const projectId = params.projectId
    const file = await fs.readFile(process.cwd() + `/public/project-resources/${projectId}/project_detail.json`, 'utf8');
    const respJson = JSON.parse(file);
    const title = respJson.title
    const description = respJson.description
    const imageItems: ProjectCardProps[] = respJson.imageItems

    return (
        <div className="w-full">
            <Header />
            <div className="w-full flex justify-center pl-6 pr-6 pt-28">
                <div className="w-full max-w-6xl">
                    <div className="font-bold text-2xl max-w-xl">{title}</div>
                    <div className="font-thin text-base max-w-xl" dangerouslySetInnerHTML={{ __html: description }}></div>
                    <div className="w-full mt-16">
                        {
                            imageItems && imageItems.map((imageItem, index) => (
                                <div key={index} className="w-full mb-9">
                                    <img src={imageItem.imageUrl} alt="image" className="w-full hover:cursor-pointer object-cover" />
                                    <div className="w-full mt-4">
                                        <div className="flex justify-start">
                                            <div className="font-extralight text-lg">{imageItem.title}</div>
                                        </div>
                                        <div className="flex justify-start">
                                            <div className="font-light text-sm">{imageItem.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}