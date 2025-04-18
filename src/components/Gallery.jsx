import { useState } from 'react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import gallery from '../data/gallery'
import useOnScreen from '../hooks/useOnScreen'

function Image({ image, index }) {
    const [ref, isVisible] = useOnScreen({ threshold: 0 });
    const [loadedImages, setLoadedImages] = useState([]);

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    return <div ref={ref}
        style={{
            transform: isVisible ? 'translateY(0%)' : '',
            opacity: isVisible ? '1' : '',
        }}
        className='w-full h-full mb-4 relative grid rounded-lg translate-y-[50px] opacity-0 transition-all duration-500 ease-in-out'
        key={image.id}>
        <div className={`${loadedImages.includes(index) ? 'animate-none ' : 'bg-base-200 animate-pulse'} `}>
            <img src={image.image} alt={image.quote} loading='lazy' onLoad={() => handleImageLoad(index)}></img>
        </div>
        <div className='grid place-content-center absolute top-0 left-0 right-0 bottom-0 bg-base-100 opacity-0 hover:opacity-65 transition-opacity duration-300'>
            <div className='grid p-6'>
                <p className='place-self-end text-typography font-normal font-base' >{image.quote}</p>
                <p className='place-self-end text-typography font-light text-sm'><FontAwesomeIcon icon={faLocationDot} /> {image.location}</p>
            </div>
        </div>
    </div>
}

function Gallery() {

    return <section id='gallery' className="py-16 min-h-svh w-full flex flex-col items-center gap-16 bg-base-100">
        <div className='max-w-3xl'>
            <div className="p-6 flex flex-col items-center">
                <div className='place-self-start flex items-center gap-2'>
                    <div className='w-8 h-[3px] bg-accent'></div>
                    <p className="py-4 place-self-start uppercase font-bold text-accent text-2xl">Gallery</p>
                </div>
                <div className='flex flex-col place-self-end'>
                    <p className="place-self-end text-xl font-medium text-typography opacity-60">
                        <span className='text-2xl'>"</span>You don't take a photograph, you make it.<span className='text-2xl'>"</span>
                    </p>
                    <span className='place-self-end text-typography opacity-60 font-light'>- Ansel Adam</span>
                </div>
            </div>
            <div
                //another layout - grid grid-cols-1 md:grid-cols-2 px-6 gap-4
                //current layout - masonry layout
                className="columns-1 md:columns-2 px-6 gap-4">
                {gallery.map((image, index) => {
                    return <Image key={image.id} image={image} index={index} />
                })}
            </div>
        </div>
    </section>
}
export default Gallery;