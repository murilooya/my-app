import { VscPreview } from 'react-icons/vsc'

export function Skills () {
    return (
        <div className="">
            <div className="flex mx-64 my-12">
                <div className="bg-white p-8 rounded-l-xl space-y-8">
                    <VscPreview size={40}/>
                    <div className='space-y-8'>
                        <span className="font-bold">Game Developer</span>
                        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </div>
                    <div className='space-y-8 '>
                        <span className='font-bold'>Stack</span>
                        <p>C#, Unity, Godot</p>
                    </div>
                </div>
                <div className="bg-white p-8 space-y-8 border-x-zinc-300 border-x-[1px]">
                    <VscPreview size={40}/>
                    <div className='space-y-8'>
                        <span className="font-bold">Embedded Developer</span>
                        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </div>
                    <div className='space-y-8 '>
                        <span className='font-bold'>Stack</span>
                        <p>C/C++, Python, Raspberry Pi, Arduino</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-r-xl space-y-8">
                    <VscPreview size={40}/>
                    <div className='space-y-8'>
                        <span className="font-bold">Web Developer</span>
                        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </div>
                    <div className='space-y-8 '>
                        <span className='font-bold'>Stack</span>
                        <p>NodeJS, TypeScript, Tailwind, NextJS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}