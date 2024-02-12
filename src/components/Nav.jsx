import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'

function Nav() {

    const [menu, setMenu] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    console.log(theme)

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
        <div className="font-sans h-20 fixed top-0 left-0 right-0 px-6 flex flex-row justify-between items-center shadow-md bg-white dark:bg-slate-950 z-10">
            <Link to="/" className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out dark:text-white">iamsuryasonar<span className="text-green-500">.dev</span></Link>
            <div className="flex justify-between items-center gap-6">
                <div onClick={() => setTheme(!theme)} className="bg-gray-400 w-9 cursor-pointer rounded-full toggler dark:bg-green-500">
                    <div className={`bg-white w-5 h-5 scale-75 rounded-full transition-transform dark:bg-white ${theme ? 'translate-x-4' : ''}`}></div>
                </div>
                <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                    {navItems.map((item) => {
                        return <a key={item.id} href={item.path} className="text-base hover:text-green-500 hover:underline underline-offset-4 dark:text-white">{item.title}</a>
                    })}
                    <Link to='/links' className="text-base hover:text-green-500  dark:text-white hover:underline underline-offset-4 ">Links</Link>
                </div>
                <FontAwesomeIcon className="text-2xl md:hidden hover:scale-150 transition-all duration-300 ease-in-out dark:text-white" icon={faBars} onClick={() => toggle()} />

            </div>
        </div>
        {menu && <div className='bg-white dark:bg-slate-950 flex flex-col justify-center items-center gap-6 h-screen fixed top-0 bottom-0 right-0 left-1/4 md:hidden z-10'>
            <FontAwesomeIcon className="text-3xl fixed top-7 right-10 hover:scale-150 transition-all duration-300 ease-in-out dark:text-white" icon={faXmark} onClick={() => toggle()} />
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 w-11/12 place-self-end"></div>
            {navItems.map((item) => {
                return <>
                    <a key={item.id} href={item.path} onClick={() => toggle()} className="overflow-hidden text-2xl hover:text-green-500 transition-all duration-300 ease-in-out dark:text-white">{item.title} </a>
                    <div className="h-[1px] dark:bg-slate-800 w-11/12 place-self-end"></div>
                </>
            })}
            <Link to='/links' onClick={() => toggle()} className="text-2xl hover:text-green-500 dark:text-white transition-all duration-300 ease-in-out">Links</Link>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 w-11/12 place-self-end"></div>
        </div>}

    </>
}

export default Nav;
