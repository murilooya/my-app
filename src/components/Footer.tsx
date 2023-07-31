import Link from "next/link"
import { AiFillLinkedin } from "react-icons/ai"

export function Footer () {
    return  (
        <footer className="flex justify-center bg-gradient-to-b from-gray-800 to-black py-5 text-gray-200 ">
            <span>Created by Murilo Oyafuso</span>
            <div>
                <Link href={'/'}>
                    <AiFillLinkedin className="scale-150"/>
                </Link>
            </div>  
        </footer>
    )
}