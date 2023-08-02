import Image from "next/image";
import Link from "next/link";

export function Card ( props : any) {

    return (
        <div className="bg-zinc-200 rounded-2xl pb-4 max-w-xs max-h-xs overflow-hidden">
            <Image className="object-cover w-full, h-64" src={ props.image } width={400} height={400} alt={ props.alt }/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 h-12">{ props.name }</div>
            </div>
            <p className="text-base text-gray-700 px-6">{ props.description }</p>
            <div className="px-6 pt-4 pb-2">     
                {
                    props.skills.map( (element : string) => {
                        return(<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{element}</span>)
                    })
                }
            </div>
            <Link className="bg-red-200 mx-6 px-6 rounded-lg" href={props.link} target='_blank'>Check Out</Link>
        </div>   
    )
}