import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import gallery from '../data/gallery'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Gallery() {

    return <section id='gallery' className="py-16 min-h-svh w-full  flex flex-col items-center gap-16 ">
        <div className='max-w-3xl '>
            <div className="p-6 flex flex-col items-center">
                <p className="py-4 place-self-start uppercase font-bold text-blue-600 text-2xl">Gallery</p>
                <div className='flex flex-col place-self-end'>
                    <p className="place-self-end text-xl font-medium text-slate-600">
                        <span className='text-2xl'>"</span>You don't take a photograph, you make it.<span className='text-2xl'>"</span>
                    </p>
                    <span className='place-self-end text-slate-500 font-light'>- Ansel Adam</span>
                </div>
            </div>
            <div
                //another layout - grid grid-cols-1 md:grid-cols-2 px-6 gap-4
                //current layout - masonry layout
                className="columns-1 md:columns-2 px-6 gap-4">
                {gallery.map((item, index) => {
                    return (
                        <div className='w-full h-full mb-4 relative grid rounded-lg' key={item.id}>
                            <img src={item.image} loading='lazy'></img>
                            <div className='grid place-content-center absolute top-0 left-0 right-0 bottom-0  bg-black opacity-0 hover:opacity-65 transition-opacity duration-300'>
                                <div className='grid p-6'>
                                    <p className='place-self-end text-white font-normal font-base' >{item.quote}</p>
                                    <p className='place-self-end text-white font-light text-sm'><FontAwesomeIcon icon={faLocationDot} /> {item.location}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
}
export default Gallery;