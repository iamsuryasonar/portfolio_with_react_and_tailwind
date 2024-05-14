import media from '../data/media'
import links from '../data/links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkPage() {
    return <>
        <section className=' w-full min-h-svh bg-slate-50  dark:bg-slate-900 flex justify-center'>
            <div className='py-24 max-w-4xl w-full  flex flex-col items-center gap-6'>
                <p className='text-3xl dark:text-white'>Links</p>
                <div className=' flex flex-row justify-center gap-4'>
                    {media.map((item) => {
                        return (
                            <a target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                                <FontAwesomeIcon className='text-3xl hover:scale-150 transition-all duration-300 ease-in-out dark:text-white' icon={item.icon} />
                            </a>
                        )
                    })}
                </div >
                {links.map((link) => {
                    return (
                        <a key={link.id} target='_blank'
                            rel='noopener noreferrer'
                            href={link.url}
                            className='w-11/12 hover:scale-105 p-10 bg-slate-200 dark:bg-slate-950 dark:border-slate-800  border-slate-900 border-[1px] flex justify-center items-center transition-all duration-300 ease-in-out'
                        >
                            <p className='text-black dark:text-white text-xl'>
                                {link.title}
                            </p>
                        </a>
                    )
                })}

            </div>
        </section>
    </>
}

export default LinkPage;