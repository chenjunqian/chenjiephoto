import Image from "next/image";

export type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    id: string;
}

export default function ProjectCard(props: ProjectCardProps) {

    const onImageClick = () => {
        window.location.href = "/project/" + props.id
    }
    
    return(
        <div className="w-full pl-4 pr-4 mb-9">
            <img src={props.imageUrl} alt="image" className="w-full hover:cursor-pointer object-cover transition-transform duration-300 transform hover:scale-110" onClick={onImageClick} />
            <div className="w-full mt-4">
                <div className="flex justify-start">
                    <div className="font-extralight text-lg">{props.title}</div>
                </div>
                <div className="flex justify-start">
                    <div className="font-light text-sm">{props.description}</div>
                </div>
            </div>
        </div>
    )
}