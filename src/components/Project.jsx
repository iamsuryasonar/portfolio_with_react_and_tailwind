import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
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
            className="max-w-4xl translate-y-[50px] opacity-0 mx-6 flex flex-col gap-4 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col gap-4 p-4 bg-secondary rounded-lg shadow-lg md:grid md:grid-cols-6">
                <div className={`max-w-96 max-h-96 overflow-hidden rounded-xl col-span-3 aspect-square ${reverse_grid ? 'md:order-2 md:place-self-end' : 'md:order-1'} ${loadedImages.includes(id) ? 'animate-none ' : 'bg-slate-100 animate-pulse'} `}>
                    <img alt={`ui screenshot of ${projectName}`} className={`w-full h-auto  object-cover shadow-lg ${isHover ? `${translate_y_percent}` : `translate-y-0`} transition-all duration-[3000ms] ease-in-out`}
                        src={image}
                        loading='lazy'
                        onLoad={() => handleImageLoad(id)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    ></img>
                </div>
                <div className={`max-w-96 h-full p-0 md:p-6 col-span-3 flex flex-col justify-evenly items-center gap-6 ${reverse_grid ? 'md:order-1' : 'md:order-2 md:place-self-end'}`}>
                    <p className="uppercase font-bold text-xl text-typography" >{projectName}</p>
                    <p className="text-base text-typography opacity-60 m-1">{projectDescription}</p>
                    <div className="w-full flex flex-wrap">
                        {techs.map((item) => {
                            return <p tabIndex={-1} key={item.id} className='m-1 px-2 rounded-xl bg-accent text-typography font-normal text-sm shadow-lg'>{item.tech}</p>
                        })}
                    </div>
                    <div className="w-full flex flex-row justify-around">
                        <a aria-label="view source code in github" href={source_code} target="_blank" rel="noopener" className='bg-buttonBg text-buttonText hover:text-buttonBg hover:bg-buttonText border border-1 border-typography px-2 py-1 rounded-md flex items-center gap-1 '>Code <FontAwesomeIcon icon={faLaptopCode} /></a>
                        {
                            live_url && <a aria-label="preview project" href={live_url} target="_blank" rel="noopener" className='bg-buttonBg text-buttonText hover:text-buttonBg hover:bg-buttonText border border-1 border-typography px-2 py-1 rounded-md flex items-center gap-1 '>Demo <FontAwesomeIcon icon={faRightToBracket} /></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;