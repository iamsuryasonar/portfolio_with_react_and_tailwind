import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import media from '../data/media'
function Footer() {
    return <>
        <div className="bg-black text-white font-sans w-full h-46 py-6 flex flex-col items-center gap-2 z-4">
            <p>Copyright © 2023. All rights are reserved</p>
            <div className="flex flex-row justify-center md:justify-start gap-4">
                {media.map((item) => {
                    return (
                        <a target='_blank' rel='noopener noreferrer' href={item.url} key={item.id} className=''>
                            <FontAwesomeIcon className='text-3xl hover:scale-150 transition-all duration-300 ease-in-out' icon={item.icon} />
                        </a>
                    )
                })}
            </div>
        </div>
    </>
}




export default Footer;