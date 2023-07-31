import { Card } from "./Card";

export function Projects () {
    return (
        <div className="flex flex-col items-center space-y-28 py-8 bg-gray-700">
            <span className="text-gray-300 text-4xl font-bold">
            Projects
            </span>
            <div className="flex gap-4 grid-cols-2">
                <Card image="/images/album.png" name="The Dark Side of the Moon" skills={["HTML", "CSS", "C#", "C/C++"]} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                <Card image="/images/album.png" name="The Dark Side of the Moon" skills={["HTML", "CSS", "C#", "C/C++"]} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                <Card image="/images/album.png" name="The Dark Side of the Moon" skills={["HTML", "CSS", "C#", "C/C++"]} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                <Card image="/images/album.png" name="The Dark Side of the Moon" skills={["HTML", "CSS", "C#", "C/C++"]} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                <Card image="/images/album.png" name="The Dark Side of the Moon" skills={["HTML", "CSS", "C#", "C/C++"]} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            </div>
        </div>
    )
}