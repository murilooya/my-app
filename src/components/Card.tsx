import Image from "next/image";

export function Card ( props : any) {

    return (
        <div className="bg-zinc-200 rounded-2xl max-w-xs max-h-xs overflow-hidden shadow-lg 
                        hover:scale-105 duration-300 hover:shadow-xl hover:blur-none 
                        hover:grayscale-0 filter grayscale blur-[2px] contrast-100">
            <Image className="w-full" src={ props.image } width={400} height={400} alt={ props.alt }/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ props.name }</div>
            </div>
            <p className="text-base text-gray-700 px-6">{ props.description }</p>
            <div className="px-6 pt-4 pb-2">     
                {
                    props.skills.map( (element : string) => {
                        return(<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{element}</span>)
                    })
                }
            </div>
      </div>   
    )
}