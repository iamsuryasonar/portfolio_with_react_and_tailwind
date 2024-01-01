import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'
import { HashLink, Link } from 'react-router-dom'
function Nav() {
    const [menu, setMenu] = useState(false);

    const toggle = () => {
        setMenu(!menu);
    };

    let navItems = [
        {
            id: 1,
            title: 'Home',
            path: '/#home'
        },
        {
            id: 2,
            title: 'About',
            path: '/#about'
        },
        {
            id: 3,
            title: 'Projects',
            path: '/#projects'
        },
        {
            id: 4,
            title: 'Gallery',
            path: '/#gallery'
        },
    ]

    return <>
        <div className="font-sans h-20 fixed top-0 left-0 right-0 px-10 flex flex-row justify-between items-center shadow-md bg-white z-10">
            <Link to="/#home" className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out">iamsuryasonar<span className="text-blue-600">.dev</span></Link>
            <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                {navItems.map((item) => {
                    return <HashLink smooth key={item.id} to={item.path} className=" hover:text-blue-600 hover:underline underline-offset-4 ">{item.title}</HashLink>
                })}
                <Link to="/links" className="hover:text-blue-600 hover:underline underline-offset-4 ">Links</Link>
            </div>
            <FontAwesomeIcon className="text-2xl md:hidden hover:scale-150 transition-all duration-300 ease-in-out" icon={faBars} onClick={() => toggle()} />
        </div>
        {menu && <div className='bg-white flex flex-col justify-center items-center gap-6 fixed top-0 bottom-0 right-0 left-1/4 md:hidden z-10'>
            <FontAwesomeIcon className="text-3xl fixed top-7 right-10 hover:scale-150 transition-all duration-300 ease-in-out " icon={faXmark} onClick={() => toggle()} />
            {navItems.map((item) => {
                return <HashLink smooth key={item.id} to={item.path} onClick={() => toggle()} className="text-2xl hover:scale-150 transition-all duration-300 ease-in-out">{item.title} </HashLink>
            })}
            <Link to="/links" className="hover:scale-150 transition-all duration-300 ease-in-out text-2xl" onClick={() => toggle()}>Links</Link>
        </div>}

    </>
}

export default Nav;
