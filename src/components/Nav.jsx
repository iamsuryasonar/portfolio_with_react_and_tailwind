import React, { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { faBars, faCheck, faPalette, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from '../contexts/ThemeProvider'
import useScrollIndicator from '../hooks/useScrollIndicator'
import useOnOutsideClick from '../hooks/useOnOutsideClick'
import navItems from '../data/navItems'
import useScrollDirection from '../hooks/useScrollDirection';

function Nav() {

    const [menu, setMenu] = useState(false);
    const ref = useRef(null)
    const themesRef = useRef(null);
    const scrollPercentage = useScrollIndicator();
    useOnOutsideClick(ref, () => { setMenu(false) });
    const scrollDirection = useScrollDirection();

    useOnOutsideClick(themesRef, () => {
        setShowThemes(false);
    });

    const [showThemes, setShowThemes] = useState(false);

    const toggle = () => {
        setMenu(!menu);
    };

    return <div className={`h-[60px] fixed top-0 left-0 right-0 z-10 bg-primary font-sans transition-all duration-500 ease-in-out ${scrollDirection === 'down' ? '-translate-y-[100%]' : 'translate-y-0'}`}>
        <div className="h-full px-6 flex flex-row justify-between items-center">
            <a href="/#home" className="text-xl font-bold hover:text-accent transition-all duration-300 ease-in-out text-typography">iamsuryasonar<span className="text-accent">.dev</span></a>
            <div className="flex justify-between items-center gap-6">
                <div ref={themesRef}>
                    <button onClick={() => setShowThemes(!showThemes)} className='text-base hover:text-accent text-typography hover:underline underline-offset-4'>
                        <FontAwesomeIcon className='md:hidden text-2xl outline-none hover:scale-125 transition-all duration-300 ease-in-out text-typography cursor-pointer' icon={faPalette} />
                        <p className='hidden md:block'>Theme</p>
                    </button>
                    {
                        showThemes && <ul className='fixed top-[65px] right-10 md:right-auto w-[150px] flex flex-col gap-2 p-2 bg-primary rounded-md'>
                            <ThemeCard item={'light'} setShowThemes={setShowThemes} textColor={'black'} bgColor={'#f1f1f2'} />
                            <ThemeCard item={'dark'} setShowThemes={setShowThemes} textColor={'white'} bgColor={'#171a2a'} />
                            <ThemeCard item={'cupcake'} setShowThemes={setShowThemes} textColor={'#030303'} bgColor={'#e5ded9'} />
                            <ThemeCard item={'aqua'} setShowThemes={setShowThemes} textColor={'#D4DEEF'} bgColor={'#2d549c'} />
                        </ul>
                    }
                </div>

                <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                    {navItems.map((item) => {
                        return <a key={item.id} href={item.path} className="text-base hover:text-accent hover:underline underline-offset-4 text-typography">{item.title}</a>
                    })}
                    <Link to='/links' className="text-base hover:text-accent  text-typography hover:underline underline-offset-4 ">Links</Link>
                </div>
                <button className='p-1' onClick={() => toggle()}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            toggle()
                        }
                    }}
                    aria-label='open menu'>
                    <FontAwesomeIcon className="text-2xl outline-none md:hidden hover:scale-125 transition-all duration-300 ease-in-out text-typography cursor-pointer"
                        icon={faBars}
                    />
                </button>
            </div>
        </div>
        <div className="z-20 h-[1px] bg-secondary w-full">
            <div style={{ width: scrollPercentage + "%" }} className="h-[1px] bg-accent"></div>
        </div>
        {/* menu */}
        <div
            style={{
                transform: menu ? 'translateX(0%)' : 'translateX(120%)',
            }}
            ref={ref}
            className='bg-primary px-6 transition-all duration-700 ease-in-out flex flex-col justify-center items-center gap-6 h-screen fixed inset-0 md:hidden z-10'
        >
            <p aria-hidden='true' className="absolute -rotate-90 left-14 -translate-x-1/2 text-[100px] font-extrabold text-secondary opacity-80">iamsuryasonar<span className="text-accent opacity-20">.dev</span></p>
            <button
                className='p-1 fixed top-7 right-6'
                onClick={() => toggle()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        toggle()
                    }
                }}
                aria-label='close menu'>
                <FontAwesomeIcon className="z-20 outline-none text-3xl hover:scale-125 transition-all duration-300 ease-in-out text-typography cursor-pointer"
                    icon={faXmark}
                />
            </button>
            <div
                className='w-full text-3xl font-extrabold font-sans border-r-[2px] border-accent border-opacity-75 pr-4 z-20 flex flex-col items-end gap-6 transition-all delay-300 duration-700 ease-in-out'
                style={{
                    transform: menu ? 'translateX(0%)' : 'translateX(100%)',
                }}
            >
                {navItems.map((item) => {
                    return <React.Fragment key={item.id}>
                        <a
                            href={item.path}
                            onClick={() => toggle()}
                            className="overflow-hidden text-typography hover:text-accent transition-all duration-300 ease-in-out ">
                            {item.title}
                        </a>
                    </React.Fragment>
                })}
                <Link
                    to='/links'
                    onClick={() => toggle()}
                    className="z-20 self-end text-typography hover:text-accent transition-all duration-300 ease-in-out">
                    Links
                </Link>
            </div>
        </div>

    </div>
}

export default Nav;


function ThemeCard({ item, setShowThemes, textColor, bgColor }) {
    const { theme, updateTheme } = useContext(ThemeContext);

    function setTheme(theme) {
        updateTheme(theme);
        setShowThemes(false);
    }

    return <li onClick={() => setTheme(item)} className={`flex gap-2 items-center px-4 py-1 bg-[${bgColor}] text-[${textColor}] shadow-secondary shadow-xl rounded-md hover:scale-x-[1.1] transition-transform duration-400 ease-in-out cursor-pointer`}>
        {
            (item === theme) && <FontAwesomeIcon icon={faCheck} />
        }
        <p>{item}</p>
    </li>
}