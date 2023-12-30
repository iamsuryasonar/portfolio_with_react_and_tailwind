import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projects";
import text from '../data/text'

function Project({ image, projectName, projectDescription, source_code, live_url, icons }) {
    return <div className="max-w-4xl mx-6 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg md:grid md:grid-cols-5 "  >
            <img className="object-cover rounded-xl shadow-lg col-span-3" src={image}></img>
            <div className="h-full p-8 col-span-2 flex flex-col justify-evenly items-center gap-6">
                <p className="uppercase font-bold text-xl" >{projectName}</p>
                <p className="text-l text-justify">{projectDescription}</p>
                <div className="grid grid-cols-4 gap-6">
                    {icons.map((item) => {
                        return <button key={item.id} className='w-10 h-10 aspect-square rounded-full bg-white shadow-md'><FontAwesomeIcon icon={item.icon} /></button>
                    })}
                </div>
                <div className="w-full flex flex-row justify-around">
                    <a href={source_code} className=' bg-white'>Code <FontAwesomeIcon icon={faLaptopCode} /></a>
                    <a href={live_url} className=' bg-white '>Demo <FontAwesomeIcon icon={faRightToBracket} /></a>
                </div>
            </div>
        </div>
    </div>
}


function Projects() {
    return <>
        <section id='projects' className="py-24 min-h-svh w-full bg-slate-50 flex flex-col items-center gap-16 ">
            <div className="max-w-4xl p-6 flex flex-col items-center">
                <p className="py-4 place-self-start uppercase font-bold text-blue-500 text-2xl">Projects</p>
                <p className="place-self-start text-xl font-medium ">{text.project_quote}</p>
            </div>
            {projects.map((item) => {
                return <Project key={item.id} image={item.image} projectName={item.title} projectDescription={item.description} source_code={item.source_code} live_url={item.url} icons={item.icons} />
            })}

        </section>
    </>
}

export default Projects;