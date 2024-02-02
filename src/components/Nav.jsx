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
            <Link to="/" className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out">iamsuryasonar<span className="text-blue-600">.dev</span></Link>
            <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                {navItems.map((item) => {
                    return <a key={item.id} href={item.path} className="text-base hover:text-blue-600 hover:underline underline-offset-4 ">{item.title}</a>
                })}
                <Link to='/links' className="text-base hover:text-blue-600 hover:underline underline-offset-4 ">Links</Link>
            </div>
            <FontAwesomeIcon className="text-2xl md:hidden hover:scale-150 transition-all duration-300 ease-in-out" icon={faBars} onClick={() => toggle()} />
        </div>
        {menu && <div className='bg-white flex flex-col justify-center items-center gap-6 h-screen fixed top-0 bottom-0 right-0 left-1/4 md:hidden z-10'>
            <FontAwesomeIcon className="text-3xl fixed top-7 right-10 hover:scale-150 transition-all duration-300 ease-in-out " icon={faXmark} onClick={() => toggle()} />
            <div className="h-[1px] bg-slate-200 w-11/12 place-self-end"></div>
            {navItems.map((item) => {
                return <>
                    <a key={item.id} href={item.path} onClick={() => toggle()} className="overflow-hidden text-2xl hover:text-blue-500 transition-all duration-300 ease-in-out">{item.title} </a>
                    <div className="h-[1px] bg-slate-200 w-11/12 place-self-end"></div>
                </>
            })}
            <Link to='/links' onClick={() => toggle()} className="text-2xl hover:text-blue-500 transition-all duration-300 ease-in-out">Links</Link>
            <div className="h-[1px] bg-slate-200 w-11/12 place-self-end"></div>
        </div>}

    </>
}

export default Nav;
