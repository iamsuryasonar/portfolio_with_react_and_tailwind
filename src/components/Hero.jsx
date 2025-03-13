import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import text from '../data/text';
import profilePicture from '../assets/dp_no_bg.png';
import skills from "../data/skills";
import media from '../data/media';
import Slider from './Slider';

const RESUME_URL = "https://drive.google.com/file/d/1EnDoy_xiKpZf208-tj2_0lYrVCIxX7Zh/view?usp=drive_link"

function Skill(props) {
    const { skill, loadedImages, handleImageLoad } = props;

    return <div
        key={skill.id}
        className={`w-[60px] aspect-square mx-2 text-2xl rounded-full ${loadedImages.includes(skill.id) ? 'animate-none ' : 'bg-base-200 animate-pulse'} `} >
        <img alt={skill.id} src={skill.image} className={`object-cover rounded-sm aspect-square ${loadedImages.includes(skill.id) ? ' block' : ' hidden'}`} onLoad={() => handleImageLoad(skill.id)} />
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

    return <>
        <section id='home' className="w-full min-h-[60vh] pt-[60px] px-6 bg-base-100 relative z-20 [clip-path:inset(0_0_0_0_round_0_0_40px_40px)] flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full flex flex-col mx-6 gap-6 lg:gap-12">
                <div className="flex flex-col-reverse py-10 lg:flex-row items-center md:justify-center gap-6 lg:gap-16">
                    <div className="flex flex-col items-center gap-6 p-2">
                        <div className="flex flex-col gap-2 ">
                            <p className="text-4xl font-bold text-center md:text-5xl lg:text-6xl text-typography">Hi, I am <span className="text-accent">Surya Sonar</span></p>
                            <div className="flex flex-row items-center " >
                                <div className={`mr-2 h-2 rounded-full growline-animation bg-typography`} onAnimationEnd={onAnimationEnd} ></div>
                                {isVisible ? <div className="w-3 h-3 rounded-full bg-accent"></div> : <div className="w-3 h-3"></div>}
                            </div>
                        </div>
                        <p className="text-center text-xl text-typography opacity-60">{text.introduction}</p>
                        <div className="flex flex-col sm:flex sm:flex-row justify-center md:justify-start gap-2 sm:gap-4">
                            <div className="flex flex-row justify-center md:justify-start gap-4 ">
                                {media.map((item) => {
                                    return (
                                        <a aria-label={`visit ${item.name} account`} target='_blank' rel='noopener noreferrer' className='text-3xl' href={item.url} key={item.id}>
                                            <FontAwesomeIcon className='text-3xl hover:scale-125 transition-all duration-300 ease-in-out text-typography' icon={item.icon} />
                                        </a>
                                    )
                                })}
                            </div>
                            <a className='bg-base-200 text-primary-content hover:bg-accent cursor-pointer transition-colors duration-300 ease-in-out rounded-full px-4 font-medium text-2xl flex items-center justify-center'
                                href={RESUME_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className={`w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full bg-base-200 ${loadedImages.includes(profilePicture) ? 'animate-none ' : 'bg-base-200 animate-pulse'} `}>
                            <img alt='profile picture of Surya Sonar' className={`object-cover rounded-full drop-shadow-[0px_-10px_6px_var(--color-shadow-glow)] ${loadedImages.includes(profilePicture) ? 'block' : ' hidden'}`} src={profilePicture} onLoad={() => handleImageLoad(profilePicture)}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <div className="w-full pt-[80px] pb-[50px] md:pt-[100px] md:pb-[60px] lg:pt-[120px] lg:pb-[80px] mt-[-40px] relative z-10 bg-base-200 flex flex-col md:flex-row md:justify-start gap-6 md:gap-0 [clip-path:inset(0_0_0_0_round_0_0_40px_40px)]">
            <div className="h-auto flex place-self-center md:place-self-auto md:flex-row flex-col text-2xl text-typography border-b-2 border-r-0 md:border-b-0 md:border-r-2 border-accent">
                <p className="place-self-center text-nowrap md:px-4">Tech Stack </p>
            </div>
            <div className="relative w-full h-full flex overflow-hidden items-center justify-center">
                <Slider speed={100}>
                    {skills.map((item) => {
                        return <Skill key={item.id} skill={item} loadedImages={loadedImages} handleImageLoad={handleImageLoad} />
                    })}
                </Slider>
                <div
                    className='absolute inset-0 bg-gradient'
                >
                </div>
            </div>
        </div>
    </>
}

export default Hero;
