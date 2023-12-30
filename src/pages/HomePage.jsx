import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { faLaptopCode, faRightToBracket } from "@fortawesome/free-solid-svg-icons";


function Projects({ image, projectName, projectDescription }) {
    return <>
        <div className="max-w-4xl mx-6 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg md:grid md:grid-cols-5 "  >
                <img className="object-cover rounded-md shadow-lg col-span-3" src={image}></img>
                <div className="h-full p-8 col-span-2 flex flex-col justify-evenly items-center gap-6">
                    <p className="uppercase font-bold">{projectName}</p>
                    <p className="text-justify">{projectDescription}</p>
                    <div className="grid grid-cols-2 gap-6">
                        <button className='px-6 py-2 bg-white shadow-md rounded-md'>stack</button>
                        <button className='px-6 py-2 bg-white shadow-md rounded-md'>stack</button>
                    </div>
                    <div className="w-full flex flex-row justify-around">
                        <button className=' bg-white '>Code <FontAwesomeIcon icon={faLaptopCode} /></button>
                        <button className=' bg-white '>Demo <FontAwesomeIcon icon={faRightToBracket} /></button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
function HomePage() {
    let projectDescription = "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
    let projectName = 'Project A'
    let image = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return <>
        <div id='home' className="w-full pt-20 bg-slate-50 flex flex-col items-center justify-center ">
            <div className="max-w-4xl flex flex-col mx-6 my-8 gap-10">
                <div className="flex flex-col-reverse md:flex-row items-center md:justify-center gap-8">
                    <div className="flex flex-col items-center gap-6 py-10">
                        <p className="text-4xl font-bold text-center md:text-6xl">Front-End React Developer</p>
                        <p className="text-center text-xl">Hi, I'm Surya Sonar. A passionate Front-end React Developer based in Assam, India. 📍</p>
                        <div className="flex flex-row justify-center md:justify-start gap-4 text-3xl">
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                    <div className="w-64 h-64 md:w-96 md:h-96 flex items-center">
                        <img className="object-cover rounded-full" src='https://iamsuryasonar.netlify.app/static/media/dp.ceb99748ad2d06613f4b.jpg'></img>
                    </div>
                </div>

                <div className="my-4 max-w-7xl flex flex-col items-center md:flex-row md:justify-start  gap-6">
                    <div className="flex md:flex-row flex-col text-2xl">
                        <p>Tech Stack </p>
                        <span className="hidden md:grid">|</span>
                        <div className="w-full h-[1px] bg-slate-600 md:hidden"></div>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='about' className="w-full h-svh bg-white flex flex-col items-center justify-center ">
            <div className="max-w-4xl mx-6 flex flex-col items-center gap-4 md:grid md:grid-cols-7 md:gap-12">
                <img className="col-start-1 col-span-3 object-cover rounded-md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <div className="flex flex-col items-center md:items-start gap-4 col-start-4 col-span-4">
                    <p className="uppercase font-bold text-blue-500">About Me</p>
                    <p className="font-xl font-bold ">A dedicated Front-end Developer
                        based in Asssam, India 📍</p>
                    <p className="text-justify">I'm a dedicated software developer with a passion for crafting elegant and efficient solutions. My journey in the world of code began with a curiosity to build and innovate. As a developer, I thrive on challenges and believe in continuous learning. I am currently focused on honing my data structure and algorithm skills, aiming to create even smarter and more optimized software.</p>
                </div>
            </div>
        </div>
        <div id='projects' className="w-full  bg-slate-50 flex flex-col items-center py-16 gap-16 ">
            <div className=" max-w-4xl flex flex-col items-center">
                <p className="uppercase font-bold text-blue-500 font-3xl">Projects</p>
                <p className="font-2xl font-bold text-center">A dedicated Front-end Developer
                    based in Asssam, India</p>
            </div>
            <Projects image={image} projectName={projectName} projectDescription={projectDescription} />
        </div>
    </>
}

export default HomePage;