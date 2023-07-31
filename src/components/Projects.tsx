import { Card } from "./Card";

export function Projects () {
    return (
        <div className="flex flex-col items-center space-y-8 py-8 bg-gray-700">
            <span className="text-gray-300 text-4xl font-bold">
            Projects I was part of
            </span>
            <div className="flex gap-4 grid-cols-2 mx-28">
                <Card image="/images/crops_and_cats.png" link='https://globalgamejam.org/2023/games/farmer-cats-8' name="Crops N'Cats + Bunny DLC (GGJ 2023 - 2º Place)" skills={["C#", "Unity"]} description="A game of cuties cats made in 72 hours in Global Game Jam 2023"/>
                <Card image="/images/realbotix.png" link='https://realbotix.com/' name="Realbotix - Robot Controller" skills={["C/C++","C#","Arduino","Unity"]} description="A realistic human robotic head who talk and interact with people"/>
            </div>
        </div>
    )
}