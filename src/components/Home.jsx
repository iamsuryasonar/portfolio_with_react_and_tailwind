import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import text from '../data/text'
import profilePicture from '../assets/dp.jpg'
import skills from "../data/skills"
import media from '../data/media'
import { useState } from 'react'
import ThemeContext from '../components/NavAndOutlet'

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    const onAnimationEnd = () => {
        setIsVisible(true);
    };

    return <section id='home' className=" w-full pt-20 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center ">
        <div className="max-w-4xl flex flex-col mx-6 my-8 gap-10">
            <div className="flex flex-col-reverse lg:flex-row items-center md:justify-center gap-8">
                <div className="flex flex-col items-center gap-6 py-10">
                    <div className="flex flex-col gap-2 ">
                        <p className="text-4xl font-bold text-center md:text-6xl dark:text-white ">iamsuryasonar<span className="text-green-500">.dev</span></p>
                        <div className="flex flex-row items-center " >
                            <div className={`mr-2 h-2 rounded-full  growline-animation bg-black dark:bg-white`} onAnimationEnd={onAnimationEnd} ></div>
                            {isVisible ? <div className="w-3 h-3 rounded-full bg-green-500"></div> : <div className="w-3 h-3"></div>}
                        </div>
                    </div>
                    <p className="text-center text-xl dark:text-white">{text.introduction}</p>
                    <div className="flex flex-row justify-center md:justify-start gap-4 text-3xl">
                        {media.map((item) => {
                            return (
                                <a target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                                    <FontAwesomeIcon className='text-3xl hover:scale-150 transition-all duration-300 ease-in-out dark:text-white' icon={item.icon} />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className=" w-64 h-64 md:w-96 md:h-96  flex items-center justify-center">
                    <div className={`w-[250px] h-[250px] rounded-full  ${loadedImages.includes(profilePicture) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `}>
                        <img className={`w-[250px] h-[250px] object-cover rounded-full ${loadedImages.includes(profilePicture) ? 'block' : ' hidden'}`} src={profilePicture} onLoad={() => handleImageLoad(profilePicture)}></img>
                    </div>
                </div>
            </div>

            <div className="my-4 max-w-7xl flex flex-col items-center md:flex-row md:justify-start  gap-6">
                <div className="flex md:flex-row flex-col text-2xl dark:text-white">
                    <p>Tech Stack </p>
                    <span className="hidden md:grid px-1 text-green-500">|</span>
                    <div className="w-full h-[2px] md:hidden bg-green-500"></div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
                    {skills.map((item) => {
                        return <div key={item.id} className={`w-10 h-10 text-2xl rounded-full hover:scale-150 transition-all duration-300 ease-in-out ${loadedImages.includes(item.id) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `} >
                            <img src={item.image} className={`object-cover rounded-sm aspect-square ${loadedImages.includes(item.id) ? ' block' : ' hidden'}`} onLoad={() => handleImageLoad(item.id)} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    </section >
}

export default Home;