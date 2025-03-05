import { Outlet } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer'

function NavAndOutlet() {
    return <div className='max-w-7xl m-auto bg-base-100'>
        <Nav />
        <div className='font-sans'>
            <Outlet />
        </div>
        <Footer />
    </div>
}

export default NavAndOutlet;