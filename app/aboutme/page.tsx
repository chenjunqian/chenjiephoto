'use client'

import Header from "@/components/header";
import { ImageItemDetail } from "@/types/image_item";
import { useEffect, useState } from "react";


export default function AboutMe() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageItems, setImageItems] = useState<ImageItemDetail[]>();


    useEffect(() => {

        const getProjectDetail = async () => {
            const resp = await fetch(`/aboutme.json`)
            const respJson = await resp.json()
            setTitle(respJson.title)
            setDescription(respJson.description)
            setImageItems(respJson.imageItems)
        }
        // getProjectDetail()
    }, [])

    return (
        <div className="w-full">
            <Header />
            <div className="w-full flex justify-center pl-6 pr-6 pt-28">
                <div className="w-full max-w-6xl">
                    <div className="font-bold text-2xl max-w-xl">Personal Narrative by Chen Jie</div>
                    <div className="font-thin text-base mt-9">
                        I am Chen Jie, a journalist and photographer.<br />
                        My aerial photography work Explosion in Tianjin, which reflected the explosion that occurred at Tianjin Chemical Factory, won the third prize in the general news category of the 2016 World Press Photo contest. I was also recognized as 2015 China’s Best Environmental Journalist, 2016 China’s Top Ten Legal Figures, and Annual Journalist of the 2017 Tencent Media Award. In addition, I won the highest prize Golden Statue Award of China Photography in 2018, five China News Awards, and two Annual Photographer Awards of China News Photography Golden Shots.<br />
                        In my over twenty years of journalism career, I have been committed to visual investigation and reporting using documentary photography and investigative journalism, to promote the effective governance of a series of environmental pollution incidents in China as well as the improvement of rural difficulties.<br />
                        While working as a journalist, I also serve as an industry mentor for master students at the Communication University of Zhejiang in China, aiming to help the university train outstanding young photographers.<br />
                        In August 2023, I initiated the “Yuer Pixel Public Benefit Project” by partnering with dozens of documentary photographers in China. Together, we delved into the real stories concerning public benefit to alleviate hardship for those in need.<br />
                        In 2024, I plan to start a three-year project to collect and organize major environmental events I reported on over the past decade. These events have had a significant impact on the social development in China, and ten of them were treated under the supervision of the State Council of China. The products include videos, investigation findings, and so forth. I want to continue to draw attention to the environment through exhibitions and publications.<br />
                        In January 2024, I created an Art Studio for Rural Development in Yong’an Village near Hangzhou. China is advancing the “rural revitalization” strategy, and Yong’an Village is one of the demonstration sites for the promotion of rural revitalization in China. I will observe in-depth changes in Yong’an Village and the eight surrounding villages from the perspective of Visual Sociology. I will use images, documentaries, and texts to record and study the changes in Yong’an Village in three to five years. At the same time, I will regularly invite painters, dancers, digital artists, and economists to create and research together, so as to produce valuable historical documents that may contribute to the development of rural areas.<br />
                        Just like the whole world, the field of reportage photography has undergone tremendous changes in recent years. Photography now serves as a tool for people to express themselves and is a form of art. How to deal with these changes? How to ensure that documentary photography and reportage photography maintain the power of reality? These are the questions that contemporary photographers need to think about and face. I seek to break new ground through in-depth investigation, practice, and interdisciplinary collaboration.<br />
                    </div>
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