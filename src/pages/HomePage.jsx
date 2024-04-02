import About from "../components/About";
import Projects from "../components/Projects";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import Certifications from '../components/Certifications'

function HomePage() {
    return <>
        <Home />
        <About />
        <Projects />
        <Certifications />
        <Gallery />
    </>
}

export default HomePage;