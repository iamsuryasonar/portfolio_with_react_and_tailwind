import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import media from '../data/media'

function Footer() {
    return <>
        <div className="font-light text-typography bg-base-100 border-t-[1px] border-base-100 font-sans w-full h-46 py-4 flex flex-col items-center gap-2 z-4">
            <p>Copyright © 2025. All rights are reserved</p>
            <div className="flex flex-row justify-center md:justify-start gap-4">
                {media.map((item) => {
                    return (
                        <a tabIndex={0} aria-label={`visit ${item.name} account`} target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                            <FontAwesomeIcon className='text-2xl hover:scale-150 transition-all duration-300 ease-in-out' icon={item.icon} />
                        </a>
                    )
                })}
            </div>
        </div>
    </>
}




export default Footer;