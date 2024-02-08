'use client'

import Header from "@/components/header";
import { ImageItemDetail } from "@/types/image_item";
import { useEffect, useState } from "react";


export default function Project({ params }: { params: { projectId: string } }) {

    const projectId = params.projectId
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageItems, setImageItems] = useState<ImageItemDetail[]>();

    useEffect(() => {
        const getProjectDetail = async () => {
            const resp = await fetch(`/project-resources/${projectId}/project_detail.json`)
            const respJson = await resp.json()
            console.log(respJson)
            setTitle(respJson.title)
            setDescription(respJson.description)
            setImageItems(respJson.imageItems)
        }
        getProjectDetail()
    }, [params.projectId])

    return (
        <div className="w-full">
            <Header />
            <div className="w-full flex justify-center pl-6 pr-6 pt-28">
                <div className="w-full max-w-6xl">
                    <div className="font-bold text-2xl max-w-xl">{title}</div>
                    <div className="font-thin text-base max-w-xl">{description}</div>
                    <div className="w-full mt-16">
                        {
                            imageItems && imageItems.map((imageItem, index) => (
                                <div key={index} className="w-full pl-4 pr-4 mb-9">
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