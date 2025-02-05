import React, { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from '../contexts/ThemeProvider'
import useScrollIndicator from '../hooks/useScrollIndicator'
import useOnOutsideClick from '../hooks/useOnOutsideClick'
import navItems from '../data/navItems'
import useScrollDirection from '../hooks/useScrollDirection';

function Nav() {

    const [menu, setMenu] = useState(false);
    const { theme, setToggleTheme } = useContext(ThemeContext);
    const ref = useRef(null)
    const scrollPercentage = useScrollIndicator();
    useOnOutsideClick(ref, () => { setMenu(false) })
    const scrollDirection = useScrollDirection();

    const toggle = () => {
        setMenu(!menu);
    };

    return <div className={`h-[60px] fixed top-0 left-0 right-0 z-10 bg-slate-50 dark:bg-slate-950 font-sans transition-all duration-500 ease-in-out ${scrollDirection === 'down' ? '-translate-y-[100%]' : 'translate-y-0'}`}>
        <div className="h-full px-6 flex flex-row justify-between items-center">
            <a href="/#home" className="text-xl font-bold hover:text-green-300 transition-all duration-300 ease-in-out dark:text-white">iamsuryasonar<span className="text-green-500">.dev</span></a>
            <div className="flex justify-between items-center gap-6">
                <div
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setToggleTheme()
                        }
                    }}
                    onClick={() => setToggleTheme()}
                    className="bg-gray-400 w-9 cursor-pointer rounded-full toggler dark:bg-green-500">
                    <div className={`bg-white w-5 h-5 scale-75 rounded-full transition-transform dark:bg-white ${theme ? 'translate-x-4' : ''}`}></div>
                </div>
                <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                    {navItems.map((item) => {
                        return <a key={item.id} href={item.path} className="text-base hover:text-green-500 hover:underline underline-offset-4 dark:text-white">{item.title}</a>
                    })}
                    <Link to='/links' className="text-base hover:text-green-500  dark:text-white hover:underline underline-offset-4 ">Links</Link>
                </div>
                <button className='p-1' onClick={() => toggle()}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            toggle()
                        }
                    }}
                    aria-label='open menu'>
                    <FontAwesomeIcon className="text-2xl outline-none md:hidden hover:scale-125 transition-all duration-300 ease-in-out dark:text-white cursor-pointer"
                        icon={faBars}
                    />
                </button>
            </div>
        </div>
        <div className="z-20 h-[1px] bg-slate-100  dark:bg-slate-900 w-full">
            <div style={{ width: scrollPercentage + "%" }} className="h-[1px] bg-green-400"></div>
        </div>
        {/* menu */}
        <div
            style={{
                transform: menu ? 'translateX(0%)' : 'translateX(120%)',
            }}
            ref={ref}
            className='bg-white px-6 dark:bg-slate-950 transition-all duration-700 ease-in-out flex flex-col justify-center items-center gap-6 h-screen fixed inset-0 md:hidden z-10'
        >
            <p aria-hidden='true' className="absolute -rotate-90 left-14 -translate-x-1/2 text-[100px] font-extrabold text-slate-50 dark:text-slate-900">iamsuryasonar<span className="text-green-100 dark:text-green-900">.dev</span></p>
            <button
                className='p-1 fixed top-7 right-6'
                onClick={() => toggle()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        toggle()
                    }
                }}
                aria-label='close menu'>
                <FontAwesomeIcon className="z-20 outline-none text-3xl hover:scale-125 transition-all duration-300 ease-in-out dark:text-white cursor-pointer"
                    icon={faXmark}
                />
            </button>
            <div
                className='w-full text-3xl font-extrabold font-sans border-r-[2px] border-green-500 border-opacity-75 pr-4 z-20 flex flex-col items-end gap-6 transition-all delay-300 duration-700 ease-in-out'
                style={{
                    transform: menu ? 'translateX(0%)' : 'translateX(100%)',
                }}
            >
                {navItems.map((item) => {
                    return <React.Fragment key={item.id}>
                        <a
                            href={item.path}
                            onClick={() => toggle()}
                            className="overflow-hidden dark:text-white hover:text-green-500 transition-all duration-300 ease-in-out ">
                            {item.title}
                        </a>
                    </React.Fragment>
                })}
                <Link
                    to='/links'
                    onClick={() => toggle()}
                    className="z-20 self-end dark:text-white hover:text-green-500 transition-all duration-300 ease-in-out">
                    Links
                </Link>
            </div>
        </div>
    </div>
}

export default Nav;
