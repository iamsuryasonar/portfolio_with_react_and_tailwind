import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import text from '../data/text'
import profilePicture from '../assets/dp.jpg'
import skills from "../data/skills"
import media from '../data/media'

function Skill(props) {
    const { skill, loadedImages, handleImageLoad } = props;

    return <div
        key={skill.id}
        className={`w-10 h-10 text-2xl rounded-full ${loadedImages.includes(skill.id) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `} >
        <img src={skill.image} className={`object-cover rounded-sm aspect-square ${loadedImages.includes(skill.id) ? ' block' : ' hidden'}`} onLoad={() => handleImageLoad(skill.id)} />
    </div>
}


function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    const [loadedImages, setLoadedImages] = useState([]);

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    const onAnimationEnd = () => {
        setIsVisible(true);
    };

    return <section id='hero' className="min-h-svh w-full pt-20 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center ">
        <div className="max-w-4xl flex flex-col mx-6 my-20 gap-6 lg:gap-12">
            <div className="flex flex-col-reverse lg:flex-row items-center md:justify-center gap-6 lg:gap-16">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col gap-2 ">
                        <p className="text-4xl font-bold text-center md:text-5xl lg:text-6xl dark:text-white ">iamsuryasonar<span className="text-green-500">.dev</span></p>
                        <div className="flex flex-row items-center " >
                            <div className={`mr-2 h-2 rounded-full growline-animation bg-black dark:bg-white`} onAnimationEnd={onAnimationEnd} ></div>
                            {isVisible ? <div className="w-3 h-3 rounded-full bg-green-500"></div> : <div className="w-3 h-3"></div>}
                        </div>
                    </div>
                    <p className="text-center text-xl text-slate-500 dark:text-slate-400">{text.introduction}</p>
                    <div className="flex flex-row justify-center md:justify-start gap-4 text-3xl">
                        {media.map((item) => {
                            return (
                                <a target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                                    <FontAwesomeIcon className='text-3xl hover:scale-125 transition-all duration-300 ease-in-out dark:text-white' icon={item.icon} />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="w-64 h-64">
                    <div className={`w-[250px] h-[250px] rounded-full  ${loadedImages.includes(profilePicture) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `}>
                        <img className={`w-[250px] h-[250px] object-cover rounded-full ${loadedImages.includes(profilePicture) ? 'block' : ' hidden'}`} src={profilePicture} onLoad={() => handleImageLoad(profilePicture)}></img>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl flex flex-col items-center md:flex-row md:justify-start gap-6">
                <div className="flex md:flex-row flex-col text-2xl dark:text-white">
                    <p className="border-b-2 border-r-0 md:border-b-0 md:border-r-2 border-green-500 md:px-4">Tech Stack </p>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
                    {skills.map((item, index) => {
                        return <Skill key={item.id} skill={item} loadedImages={loadedImages} handleImageLoad={handleImageLoad} />
                    })}
                </div>
            </div>
        </div>
    </section >
}

export default Hero;