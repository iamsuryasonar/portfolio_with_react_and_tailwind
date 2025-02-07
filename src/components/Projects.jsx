import { miniProjects, projects } from "../data/projects";
import text from '../data/text'
import MiniProjects from "./MiniProject";
import Project from './Project';

function Projects() {
    return <>
        <section id='projects' className="py-24 min-h-svh w-full bg-base-100 flex flex-col items-center gap-12">
            <div className='flex flex-col items-center gap-16'>
                <div className="max-w-4xl p-6 flex flex-col items-center">
                    <div className='place-self-start flex items-center gap-2'>
                        <div className='w-8 h-[3px] bg-accent'></div>
                        <p className="py-4 place-self-start uppercase font-bold text-accent text-2xl">Projects</p>
                    </div>
                    <p className="place-self-start text-xl font-medium text-typography">{text.project_quote}</p>
                </div>
                {
                    projects.map((item, index) => {
                        return <Project key={item.id} id={item.id} image={item.image} projectName={item.title} projectDescription={item.description} source_code={item.source_code} live_url={item.url} techs={item.techs} translate_y_percent={item.translate_y_percent} reverse_grid={index % 2 != 0 ? true : false} />
                    })
                }
            </div>

            <div className='max-w-4xl w-full flex flex-col items-center gap-8 px-6 '>
                <div className='place-self-start flex items-center gap-2'>
                    <div className='w-8 h-[2px] bg-accent'></div>
                    <p className="py-2 place-self-start uppercase font-bold text-accent text-xl">Minor projects</p>
                </div>
                <ol className='max-w-[816px] w-full flex flex-col lg:grid lg:grid-cols-2 gap-4'>
                    {
                        miniProjects.map((item) => {
                            return <MiniProjects key={item.id} project={item} />
                        })
                    }
                </ol>
            </div>
        </section >
    </>
}

export default Projects;