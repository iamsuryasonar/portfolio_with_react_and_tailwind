import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import text from '../data/text'
import profilePicture from '../assets/dp.jpg'
import skills from "../data/skills"

function Home() {
    return <section id='home' className="w-full pt-20 bg-slate-50 flex flex-col items-center justify-center ">
        <div className="max-w-4xl flex flex-col mx-6 my-8 gap-10">
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-center gap-8">
                <div className="flex flex-col items-center gap-6 py-10">
                    <p className="text-4xl font-bold text-center md:text-6xl">{text.title}</p>
                    <p className="text-center text-xl">{text.introduction}</p>
                    <div className="flex flex-row justify-center md:justify-start gap-4 text-3xl">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <div className="w-64 h-64 md:w-96 md:h-96 flex items-center ">
                    <img className="object-cover rounded-full " src={profilePicture}></img>
                </div>
            </div>

            <div className="my-4 max-w-7xl flex flex-col items-center md:flex-row md:justify-start  gap-6">
                <div className="flex md:flex-row flex-col text-2xl">
                    <p>Tech Stack </p>
                    <span className="hidden md:grid">|</span>
                    <div className="w-full h-[1px] bg-slate-600 md:hidden"></div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
                    {skills.map((item) => {
                        return <img key={item.id} className="w-10 h-10 text-2xl hover:scale-150 transition-all duration-300 ease-in-out" src={item.image}></img>
                    })}
                </div>
            </div>
        </div>
    </section>
}

export default Home;