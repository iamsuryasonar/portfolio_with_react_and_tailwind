import About from "../components/About";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Certifications from '../components/Certifications'

function HomePage() {
    return <>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        {/* <Gallery /> */}
    </>
}

export default HomePage;