import media from '../data/media'
import links from '../data/links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkPage() {
    return <>
        <section className=' w-full min-h-svh bg-base-100 flex justify-center'>
            <div className='py-24 max-w-4xl w-full  flex flex-col items-center gap-6'>
                <p className='text-3xl text-typography'>Links</p>
                <div className=' flex flex-row justify-center gap-4'>
                    {media.map((item) => {
                        return (
                            <a target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                                <FontAwesomeIcon className='text-3xl hover:scale-150 transition-all duration-300 ease-in-out text-typography' icon={item.icon} />
                            </a>
                        )
                    })}
                </div >
                {links.map((link) => {
                    return (
                        <a key={link.id} target='_blank'
                            rel='noopener noreferrer'
                            href={link.url}
                            className='w-11/12 hover:scale-[1.03] p-10 bg-base-100 border-accent border-[1px] flex justify-center items-center transition-all duration-400 ease-in-out'
                        >
                            <p className='text-typography text-xl'>
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