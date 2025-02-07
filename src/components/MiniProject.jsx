import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, } from "@fortawesome/free-solid-svg-icons";
import useOnScreen from '../hooks/useOnScreen'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MiniProjects({ project }) {
    const [ref, isVisible] = useOnScreen({ threshold: 0 });
    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <li
            ref={ref}
            style={{
                transform: isVisible ? 'translateY(0%)' : '',
                opacity: isVisible ? '1' : '',
            }}
            className="w-full h-full translate-y-[50px] opacity-0 transition-all duration-700 ease-in-out ">
            <div className='h-full p-4 flex flex-col gap-4 rounded-md border-[1px] border-typography text-typography font-light text-sm'>
                <span className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faBook} className='' />
                    <a aria-label="view source code in github" href={project.source_code} target='_blank' className='text-accent hover:underline'>{project.title}</a>
                </span>
                <p className='text-typography opacity-60'>{project.description}</p>
                <div className='flex items-center flex-wrap gap-4'>
                    <div className='flex flex-wrap gap-4'>
                        {
                            project.techs.map((item) => {
                                return <div key={item.id} className='flex items-center gap-1'>
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: randomColor() }}>
                                    </div>
                                    <p>{item.tech}</p>
                                </div>
                            })
                        }
                    </div>
                    <a aria-label="view source code in github" href={project.source_code} target='_blank' className='group w-6 h-6 flex justify-center items-center border rounded-full border-typography hover:border-accent'>
                        <FontAwesomeIcon icon={faGithub} className='group-hover:text-accent' />
                    </a>
                </div>
            </div>
        </li>
    )
}

export default MiniProjects;