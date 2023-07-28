import Image from "next/image";

export function Intro () {
    return (
        <div className="flex flex-col gap-16 items-center justify-center bg-green-200 h-screen">
        <Image className="bg-blue-400 rounded-full border-black/80 border-2 shadow-md shadow-gray-500" src="/images/my-icon.png" alt="Icone do Chicken Little" width={200} height={200} />
            <span className="text-4xl font-bold">Murilo Oyafuso</span>
            <p className="text-justify w-2/3 font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores, mollitia necessitatibus explicabo quia   corrupti iste sapiente ab tenetur! Magni non, eaque aperiam ipsam libero modi tempora officia nobis quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit deserunt illum, ducimus sapiente veritatis magnam ipsa quam iure nam laboriosam temporibus odio quo alias natus cupiditate nesciunt sint nemo?
            </p>
      </div>
    )
}