import text from '../data/text'

function About() {
    return <section id='about' className="w-full h-svh bg-white flex flex-col items-center justify-center ">
        <div className="max-w-4xl mx-6 flex flex-col items-center gap-4 md:grid md:grid-cols-7 md:gap-12">
            <img className="col-start-1 col-span-3 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="flex flex-col items-center md:items-start gap-4 col-start-4 col-span-4">
                <p className="uppercase font-bold text-2xl text-blue-500">About Me</p>
                <p className="text-xl font-bold ">{text.about_title}</p>
                <p className="text-xl text-justify">{text.about_me}</p>
            </div>
        </div>
    </section>
}

export default About;