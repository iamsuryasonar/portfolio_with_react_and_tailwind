import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import text from '../data/text'
import profilePicture from '../assets/dp.webp'
import skills from "../data/skills"
import media from '../data/media'
import Slider from './Slider'

const RESUME_URL = "https://drive.google.com/file/d/1I4o1SP021PdUNHdMzjcD3ol6jW-v-eAT/view?usp=drive_link"

function Skill(props) {
    const { skill, loadedImages, handleImageLoad } = props;

    return <div
        key={skill.id}
        className={`w-[60px] aspect-square mx-2 text-2xl rounded-full ${loadedImages.includes(skill.id) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `} >
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

    return <section id='home' className="min-h-svh w-full pt-20 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center ">
        <div className="max-w-4xl w-full flex flex-col mx-6 my-20 gap-6 lg:gap-12">
            <div className="flex flex-col-reverse lg:flex-row items-center md:justify-center gap-6 lg:gap-16">
                <div className="flex flex-col items-center gap-6 p-2">
                    <div className="flex flex-col gap-2 ">
                        <p className="text-4xl font-bold text-center md:text-5xl lg:text-6xl dark:text-white ">Hi, I am <span className="text-green-500">Surya Sonar</span></p>
                        <div className="flex flex-row items-center " >
                            <div className={`mr-2 h-2 rounded-full growline-animation bg-black dark:bg-white`} onAnimationEnd={onAnimationEnd} ></div>
                            {isVisible ? <div className="w-3 h-3 rounded-full bg-green-500"></div> : <div className="w-3 h-3"></div>}
                        </div>
                    </div>
                    <p className="text-center text-xl text-slate-500 dark:text-slate-400">{text.introduction}</p>
                    <div className="flex flex-col sm:flex sm:flex-row justify-center md:justify-start gap-2 sm:gap-4">
                        <div className="flex flex-row justify-center md:justify-start gap-4 ">
                            {media.map((item) => {
                                return (
                                    <a target='_blank' rel='noopener noreferrer' className='text-3xl' href={item.url} key={item.id}>
                                        <FontAwesomeIcon className='text-3xl hover:scale-125 transition-all duration-300 ease-in-out dark:text-white' icon={item.icon} />
                                    </a>
                                )
                            })}
                        </div>
                        <a className='bg-black text-white dark:bg-white dark:text-black hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out rounded-full px-4 font-medium text-2xl flex justify-center items-center'
                            href={RESUME_URL}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
                <div className="w-64 h-64">
                    <div className={`w-[250px] h-[250px] rounded-full  ${loadedImages.includes(profilePicture) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `}>
                        <img className={`w-[250px] h-[250px] object-cover rounded-full ${loadedImages.includes(profilePicture) ? 'block' : ' hidden'}`} src={profilePicture} onLoad={() => handleImageLoad(profilePicture)}></img>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-start gap-6 md:gap-0">
                <div className="h-auto flex place-self-center md:place-self-auto md:flex-row flex-col text-2xl dark:text-white border-b-2 border-r-0 md:border-b-0 md:border-r-2 border-green-500">
                    <p className="place-self-center text-nowrap md:px-4">Tech Stack </p>
                </div>
                {/* <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
                    {skills.map((item, index) => {
                        return <Skill key={item.id} skill={item} loadedImages={loadedImages} handleImageLoad={handleImageLoad} />
                    })}
                </div> */}
                <div className="relative w-full h-full flex overflow-hidden items-center justify-center">
                    <Slider speed={100}>
                        {skills.map((item) => {
                            return <Skill key={item.id} skill={item} loadedImages={loadedImages} handleImageLoad={handleImageLoad} />
                        })}
                    </Slider>
                    <div
                        className='absolute inset-0 bg-[linear-gradient(90deg,#00000000_85%,#f8fafc_99%,#f8fafc_100%)] dark:bg-[linear-gradient(90deg,#00000000_85%,#020617_99%,#020617_100%)]'
                    >
                    </div>
                </div>
            </div>
        </div>
    </section >
}

export default Hero;
