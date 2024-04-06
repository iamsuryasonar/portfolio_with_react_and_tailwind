import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'

function Nav() {

    const [menu, setMenu] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

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
            title: 'Certificates',
            path: '/#certificates'
        },
        {
            id: 5,
            title: 'Gallery',
            path: '/#gallery'
        },
    ]

    return <>
        <div className="font-sans h-20 fixed top-0 left-0 right-0 px-6 flex flex-row justify-between items-center shadow-md bg-white dark:bg-slate-950 z-10">
            <Link to="/" className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out dark:text-white">iamsuryasonar<span className="text-green-500">.dev</span></Link>
            <div className="flex justify-between items-center gap-6">
                <div
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setTheme(!theme)
                        }
                    }}
                    onClick={() => setTheme(!theme)}
                    className="bg-gray-400 w-9 cursor-pointer rounded-full toggler dark:bg-green-500">
                    <div className={`bg-white w-5 h-5 scale-75 rounded-full transition-transform dark:bg-white ${theme ? 'translate-x-4' : ''}`}></div>
                </div>
                <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                    {navItems.map((item) => {
                        return <a key={item.id} href={item.path} className="text-base hover:text-green-500 hover:underline underline-offset-4 dark:text-white">{item.title}</a>
                    })}
                    <Link to='/links' className="text-base hover:text-green-500  dark:text-white hover:underline underline-offset-4 ">Links</Link>
                </div>
                <FontAwesomeIcon className="text-2xl md:hidden hover:scale-150 transition-all duration-300 ease-in-out dark:text-white"
                    icon={faBars}
                    onClick={() => toggle()}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            toggle()
                        }
                    }} />
            </div>
        </div>
        {menu && <div className='bg-white dark:bg-slate-950 flex flex-col justify-center items-center gap-6 h-screen fixed top-0 bottom-0 right-0 left-1/4 md:hidden z-10'>
            <p className="absolute -rotate-90 left-14 -translate-x-1/2 text-[100px] font-extrabold text-slate-50 dark:text-slate-900">iamsuryasonar<span className="text-green-100 dark:text-green-900">.dev</span></p>
            <FontAwesomeIcon className="z-20 text-3xl fixed top-7 right-10 hover:scale-150 transition-all duration-300 ease-in-out dark:text-white"
                icon={faXmark}
                onClick={() => toggle()}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        toggle()
                    }
                }} />
            <div className="z-20 h-[1px] bg-slate-200 dark:bg-slate-800 w-9/12 place-self-end"></div>
            {navItems.map((item) => {
                return <Fragment key={item.id} >
                    <a href={item.path} onClick={() => toggle()} className="z-20 self-end px-10 overflow-hidden text-2xl hover:text-green-500 transition-all duration-300 ease-in-out dark:text-white">{item.title} </a>
                    <div className="z-20 h-[1px] bg-slate-200 dark:bg-slate-800 w-9/12 place-self-end"></div>
                </Fragment>
            })}
            <Link to='/links' onClick={() => toggle()} className="z-20 self-end px-10 text-2xl hover:text-green-500 dark:text-white transition-all duration-300 ease-in-out">Links</Link>
            <div className="z-20 h-[1px] bg-slate-200 dark:bg-slate-800 w-9/12 place-self-end"></div>
        </div>}
    </>
}

export default Nav;
