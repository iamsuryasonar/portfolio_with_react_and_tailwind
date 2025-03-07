import text from '../data/text'
import { useState } from 'react'

function About() {
    const [loadedImages, setLoadedImages] = useState([]);

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    return <section id='about' className="w-full mt-[-40px] pt-[150px] relative z-0 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-6 flex flex-col items-center gap-4 md:grid md:grid-cols-7 md:gap-12">
            <div className={`col-start-1 col-span-3  rounded-xl ${loadedImages.includes('aboutimage') ? 'animate-none bg-base-200' : 'bg-base-200 animate-pulse'} `}>
                <img alt='fingers typing on keyboard' className={`object-cover rounded-xl ${loadedImages.includes('aboutimage') ? 'block' : ' hidden'}`} src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" onLoad={() => handleImageLoad('aboutimage')}></img>
            </div>
            <div className="flex flex-col items-start gap-4 col-start-4 col-span-4">
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-[3px] bg-accent'></div>
                    <p className="uppercase font-bold text-2xl text-accent">About Me</p>
                </div>
                <p className="font-bold text-typography">{text.about_title}</p>
                <p className="text-base text-typography opacity-60">{text.about_me}</p>
            </div>
        </div>
    </section>
}

export default About;
