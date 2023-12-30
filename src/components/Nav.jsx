import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    const [menu, setMenu] = useState(false);

    const toggle = () => {
        setMenu(!menu);
    };

    let navItems = [
        {
            id: 1,
            title: 'Home',
            path: '#home'
        },
        {
            id: 2,
            title: 'About',
            path: '#about'
        },
        {
            id: 3,
            title: 'Projects',
            path: '#projects'
        },

    ]
    return <>
        <div className="h-20 fixed top-0 left-0 right-0 px-10 flex flex-row justify-between items-center shadow-md bg-white">
            <a href="#home" className="text-xl font-bold">iamsuryasonar.dev</a>
            <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 ">
                {navItems.map((item) => {
                    return <a key={item.id} href={item.path} className="">{item.title}</a>
                })}
                <Link to="">Links</Link>
            </div>
            <FontAwesomeIcon className="text-2xl md:hidden" icon={faBars} onClick={() => toggle()} />
        </div>
        {menu && <div className='bg-white flex flex-col justify-center items-center gap-6 fixed top-0 bottom-0 right-0 left-1/4 md:hidden'>
            <FontAwesomeIcon className="text-3xl fixed top-7 right-10" icon={faXmark} onClick={() => toggle()} />
            {navItems.map((item) => {
                return <a key={item.id} href={item.path} onClick={() => toggle()}>{item.title} </a>
            })}
            <Link to="">Links</Link>
        </div>}

    </>
}

export default Nav;