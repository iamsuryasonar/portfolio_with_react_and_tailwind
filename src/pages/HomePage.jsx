import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { faLaptopCode, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import About from "../components/About";
import Projects from "../components/Projects";
import Home from "../components/Home";
import Gallery from "../components/Gallery";


function HomePage() {
    return <>
        <Home />
        <About />
        <Projects />
        <Gallery />
    </>
}

export default HomePage;