import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faCodeFork, faLaptopCode, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { miniProjects, projects } from "../data/projects";
import text from '../data/text'
import useOnScreen from '../hooks/useOnScreen'

function Project(props) {
    const {
        id,
        image,
        projectName,
        projectDescription,
        source_code,
        live_url,
        techs,
        translate_y_percent,
        reverse_grid
    } = props;

    const [isHover, setHover] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);
    const [ref, isVisible] = useOnScreen({ threshold: 0 });

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    return (
        <div
            ref={ref}
            style={{
                transform: isVisible ? 'translateY(0%)' : '',
                opacity: isVisible ? '1' : '',
            }}
            className="max-w-4xl translate-y-[50px] opacity-0 mx-6 flex flex-col gap-4 transition-all duration-700 ease-in-out">
            <div className="flex flex-col gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg md:grid md:grid-cols-6">
                <div className={`max-w-96 max-h-96 overflow-hidden rounded-xl col-span-3 aspect-square ${reverse_grid ? 'md:order-2 md:place-self-end' : 'md:order-1'} ${loadedImages.includes(id) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `}>
                    <img className={`w-full h-auto  object-cover shadow-lg ${isHover ? `${translate_y_percent}` : `translate-y-0`} transition-all duration-[3000ms] ease-in-out`}
                        src={image}
                        loading='lazy'
                        onLoad={() => handleImageLoad(id)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    ></img>
                </div>
                <div className={`max-w-96 h-full p-0 md:p-6 col-span-3 flex flex-col justify-evenly items-center gap-6 ${reverse_grid ? 'md:order-1' : 'md:order-2 md:place-self-end'}`}>
                    <p className="uppercase font-bold text-xl dark:text-white" >{projectName}</p>
                    <p className="text-base text-slate-500 m-1">{projectDescription}</p>
                    <div className="w-full flex flex-wrap">
                        {techs.map((item) => {
                            return <p tabIndex={-1} key={item.id} className='m-1 px-2 rounded-xl bg-green-500 text-white font-normal text-sm shadow-lg'>{item.tech}</p>
                        })}
                    </div>
                    <div className="w-full flex flex-row justify-around">
                        <a href={source_code} className='hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white dark:text-white border border-1 border-slate-400 px-2 py-1 rounded-md flex items-center gap-1 '>Code <FontAwesomeIcon icon={faLaptopCode} /></a>
                        {
                            live_url && <a href={live_url} className='  hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white dark:text-white border border-1 border-slate-400 px-2 py-1 rounded-md flex items-center gap-1 '>Demo <FontAwesomeIcon icon={faRightToBracket} /></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function MiniProjects({ project }) {
    const [ref, isVisible] = useOnScreen({ threshold: 0 });
    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };


    return (
        <li
            ref={ref}
            style={{
                transform: isVisible ? 'translateY(0%)' : '',
                opacity: isVisible ? '1' : '',
            }}
            className="w-full h-full translate-y-[50px] opacity-0 transition-all duration-700 ease-in-out">
            <div className='h-full p-4 flex flex-col gap-4 rounded-md border-[1px] dark:border-slate-600 border-slate-400 dark:text-white font-light text-sm'>
                <span className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faBook} className='' />
                    <a href={project.source_code} target='_blank' className='text-green-500 hover:underline'>{project.title}</a>
                </span>
                <p className=''>{project.description}</p>
                <div className='flex items-center flex-wrap gap-4'>
                    <div className='flex flex-wrap gap-4'>
                        {
                            project.techs.map((item) => {
                                return <div className='flex items-center gap-1'>
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: randomColor() }}>
                                    </div>
                                    <p>{item.tech}</p>
                                </div>
                            })
                        }
                    </div>
                    <a href={project.source_code} target='_blank'>
                        <FontAwesomeIcon icon={faCodeFork} className='' />
                    </a>
                </div>
            </div>
        </li>
    )
}

function Projects() {
    return <>
        <section id='projects' className="py-24 min-h-svh w-full bg-slate-50 dark:bg-slate-950 flex flex-col items-center gap-12">
            <div className='flex flex-col items-center gap-16'>
                <div className="max-w-4xl p-6 flex flex-col items-center">
                    <div className='place-self-start flex items-center gap-2'>
                        <div className='w-8 h-[3px] bg-green-500'></div>
                        <p className="py-4 place-self-start uppercase font-bold text-green-500 text-2xl">Projects</p>
                    </div>
                    <p className="place-self-start text-xl font-medium dark:text-white">{text.project_quote}</p>
                </div>
                {
                    projects.map((item, index) => {
                        return <Project key={item.id} id={item.id} image={item.image} projectName={item.title} projectDescription={item.description} source_code={item.source_code} live_url={item.url} techs={item.techs} translate_y_percent={item.translate_y_percent} reverse_grid={index % 2 != 0 ? true : false} />
                    })
                }
            </div>

            <div className='max-w-4xl w-full flex flex-col items-center gap-8 px-6 '>
                <div className='place-self-start flex items-center gap-2'>
                    <div className='w-8 h-[2px] bg-green-500'></div>
                    <p className="py-2 place-self-start uppercase font-bold text-green-500 text-xl">Minor projects</p>
                </div>
                <ol className='max-w-[816px] w-full flex flex-col lg:grid lg:grid-cols-2 gap-4'>
                    {
                        miniProjects.map((item) => {
                            return <MiniProjects project={item} />
                        })
                    }
                </ol>
            </div>
        </section >
    </>
}

export default Projects;