import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Nav from './Nav';
import Footer from './Footer'


function NavAndOutlet() {
    return <>
        <Nav />
        <div className='font-sans'>
            <Helmet>
                <title>Surya Sonar | Software Developer</title>
                <meta name="description" content="Surya Sonar's personal portfolio showcasing web development skills, projects, and certifications." />
                <meta name="keywords" content="web developer, react developer, flutter developer, portfolio, Surya Sonar, Surya, Sonar, React, front-end, JavaScript, Front end, front end, iamsuryasonar, i am suryasonar, imsuryasonar, iamsuryasonar.dev" />
                <meta property="og:title" content="Surya Sonar | Software Developer" />
                <meta property="og:description" content="A portfolio showcasing web development skills, projects, and certifications." />
                <meta property="og:url" content="https://iamsuryasonar.netlify.app" />
                <meta property="og:image" content="https://iamsuryasonar.netlify.app/src/assets/dp.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="iamsuryasonar.dev" />
            </Helmet>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default NavAndOutlet;