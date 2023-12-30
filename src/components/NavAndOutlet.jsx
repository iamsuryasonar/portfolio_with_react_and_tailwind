import Nav from './Nav';
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function NavAndOutlet() {
    return <>
        <Nav />
        <div className=''>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default NavAndOutlet;