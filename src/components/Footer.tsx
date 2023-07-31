import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"

export function Footer () {
    return  (
        <footer className="flex justify-around bg-gradient-to-b from-gray-800 to-black py-5 text-gray-200">
            <div></div>
            <span className="pb-4">Developed by Murilo Oyafuso</span>
            <div className="flex gap-x-2">
                <Link href={'https://www.linkedin.com/in/murilo-oyafuso-247753179/'} target="_blank" ><AiFillLinkedin size={30} /> </Link>
                <Link href={'https://github.com/murilooya'} target="_blank"><AiFillGithub size={30} /> </Link>
                <Link href={'mailto:muoyafuso@gmail.com'}><BiLogoGmail size={30}/></Link>
            </div>
        </footer>
    )
}