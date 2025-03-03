import { useState } from 'react'
import certificates from '../data/certificates'
import useOnScreen from '../hooks/useOnScreen'

function Certificate({ certificate }) {

    const [loadedImages, setLoadedImages] = useState([]);
    const [ref, isVisible] = useOnScreen({ threshold: 0 });

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    return <div key={certificate.id}
        ref={ref}
        style={{
            transform: isVisible ? 'translateY(0%)' : '',
            opacity: isVisible ? '1' : '',
        }}
        className='flex flex-col gap-4 translate-y-[50px] opacity-0 transition-all duration-700 ease-in-out md:grid md:grid-cols-7 md:gap-12'>
        <div onClick={() => redirectToCertification(certificate.url)} className={`col-start-1 col-span-3 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-xl cursor-pointer ${loadedImages.includes(certificate.id) ? 'animate-none bg-base-100' : 'bg-base-100 animate-pulse'} `}>
            <img alt={`${certificate.title} certificate`} className={`object-cover rounded-xl ${loadedImages.includes(certificate.id) ? 'block' : ' hidden'}`} src={certificate.image} onLoad={() => handleImageLoad(certificate.id)}></img>
        </div>
        <div className="flex flex-col items-start gap-4 col-start-4 col-span-4">
            <a aria-label="link to certificate" href={certificate.url} target="_blank" rel="noopener" className='hover:text-accent font-bold text-typography cursor-pointer duration-500 transition-all ease-in-out'>{certificate.title} </a>
            <p className="text-base text-typography opacity-60 ">{certificate.description}</p>
        </div>
    </div>
}


function Certifications() {

    return <section id='certificates' className="py-16 w-full min-h-svh  bg-base-100 flex flex-col items-center justify-center ">
        <div className="max-w-4xl mx-6">
            <div className="flex flex-col items-start">
                <div className='flex items-center gap-2 py-4'>
                    <div className='w-8 h-[3px] bg-accent'></div>
                    <p className="uppercase font-bold text-2xl text-accent">Certificates</p>
                </div>
                <div className="flex flex-col gap-12 ">
                    {
                        certificates && certificates.map((certificate) => {
                            return <Certificate key={certificate.id} certificate={certificate} />
                        })
                    }
                </div>
            </div>
        </div>
    </section >
}

export default Certifications;
