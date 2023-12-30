import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return <>
        <div className="font-sans w-full h-46 py-6 flex flex-col items-center gap-2">
            <p>Copyright © 2023. All rights are reserved</p>
            <div className="flex flex-row justify-center md:justify-start gap-4">
                <FontAwesomeIcon className="text-2xl hover:scale-150 transition-all duration-300 ease-in-out" icon={faGithub} />
                <FontAwesomeIcon className="text-2xl hover:scale-150 transition-all duration-300 ease-in-out" icon={faLinkedin} />
            </div>
        </div>
    </>
}

export default Footer;