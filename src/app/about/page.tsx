import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function About(){
    return (
        <>
            <Header />
            <div className="h-screen my-8 text-center">
                <h1 className="pb-8 text-2xl font-bold">So, who is Murilo?</h1>
                <div className="flex gap-x-8 justify-center items-center">
                    <p className="w-1/3 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium excepturi facere dicta dolores quas pariatur culpa optio facilis! Labore assumenda eius vero nostrum consequuntur iste blanditiis rem dolorem harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sed qui, exercitationem, aspernatur adipisci molestias, ab repudiandae inventore perspiciatis ullam consequatur odio voluptatem corporis sapiente non temporibus reiciendis fugit dicta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur et id harum repudiandae fugit cum reiciendis est soluta corrupti nobis esse nesciunt similique eligendi exercitationem, ipsa deserunt? Asperiores, beatae?</p>
                    <div className="w-1/4 h-1/4">
                        <Image className="w-full rounded-md" src='/images/chicken_little_about.jpg' alt='Chicken little image' width={500} height={500}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}