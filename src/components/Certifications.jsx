import certificates from '../data/certificates'
import { useState } from 'react'

function Certifications() {
    const [loadedImages, setLoadedImages] = useState([]);

    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
    };

    const redirectToCertification = (url) => {
        window.open(url, '_blank');
    }

    return <section id='certificates' className="py-16 w-full min-h-svh bg-white dark:bg-slate-900 flex flex-col items-center justify-center ">
        <div className="max-w-4xl mx-6">
            <div className="flex flex-col items-start">
                <div className='flex items-center gap-2 py-4'>
                    <div className='w-8 h-[3px] bg-green-500'></div>
                    <p className="uppercase font-bold text-2xl text-green-500">Certificates</p>
                </div>
                <div className="flex flex-col gap-12 ">
                    {
                        certificates && certificates.map((certificate) => {
                            return <div key={certificate.id} className='flex flex-col gap-4 md:grid md:grid-cols-7 md:gap-12'>
                                <div onClick={() => redirectToCertification(certificate.url)} className={`col-start-1 col-span-3  rounded-xl  cursor-pointer ${loadedImages.includes(certificate.id) ? 'animate-none bg-slate-100' : 'bg-slate-100 animate-pulse'} `}>
                                    <img className={`object-cover rounded-xl ${loadedImages.includes(certificate.id) ? 'block' : ' hidden'}`} src={certificate.image} onLoad={() => handleImageLoad(certificate.id)}></img>
                                </div>
                                <div className="flex flex-col items-start gap-4 col-start-4 col-span-4">
                                    <p onClick={() => redirectToCertification(certificate.url)} className=" font-bold dark:text-white cursor-pointer">{certificate.title}</p>
                                    <p className="text-base text-slate-500 ">{certificate.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </section >
}

export default Certifications;
