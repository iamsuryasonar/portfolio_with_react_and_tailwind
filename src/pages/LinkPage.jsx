import media from '../data/media'
import links from '../data/links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkPage() {
    return <>

        <section className=' w-full h-svh bg-slate-50 flex justify-center'>
            <div className='py-24 max-w-4xl w-full  flex flex-col items-center gap-6'>
                <p className='text-3xl '>Links</p>
                <div className=' flex flex-row justify-center gap-4'>
                    {media.map((item) => {
                        return (
                            <a target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                                <FontAwesomeIcon className='text-3xl hover:scale-150 transition-all duration-300 ease-in-out' icon={item.icon} />
                            </a>
                        )
                    })}
                </div >
                {links.map((link) => {
                    return (
                        <div className='w-11/12 hover:w-full p-10 bg-slate-200  flex justify-center items-center transition-all duration-300 ease-in-out'>
                            <a target='_blank'
                                rel='noopener noreferrer'
                                href={link.url}
                                className='text-black text-xl'
                                key={link.id}
                            >
                                <p className=''>
                                    {link.title}
                                </p>
                            </a>
                        </div >
                    )
                })}

            </div>
        </section>
    </>
}

export default LinkPage;