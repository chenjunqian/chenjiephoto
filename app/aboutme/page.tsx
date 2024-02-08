
import Header from "@/components/header";
import project_detail from "@/public/aboutme/project_detail.json"


export default function AboutMe() {

    const title = project_detail.title
    const description = project_detail.description
    const imageItems = project_detail.imageItems

    return (
        <div className="w-full">
            <Header />
            <div className="w-full flex justify-center pl-6 pr-6 pt-28">
                <div className="w-full max-w-6xl">
                    <div className="font-bold text-2xl max-w-xl">{title}</div>
                    <div className="font-thin text-base mt-9" dangerouslySetInnerHTML={{ __html: description }}></div>
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