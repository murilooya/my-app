import Link from "next/link";

export function Header () {
    return (
        <header className="flex justify-around shadow-md py-5 bg-white/60 text-gray-800 text-center">
            <Link className="hover:bg-gray-300 duration-300 px-5 rounded-full" href='/'>Home</Link>
            <Link className="hover:bg-gray-300 duration-300 px-5 rounded-full" href='/'>About me</Link>
            <Link className="hover:bg-gray-300 duration-300 px-5 rounded-full" href='/'>Contact</Link>
        </header>
    )
}