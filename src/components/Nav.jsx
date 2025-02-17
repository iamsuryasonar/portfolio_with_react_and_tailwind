import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faCheck, faPalette, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FocusTrap } from 'focus-trap-react';
import { ThemeContext } from '../contexts/ThemeProvider';
import useScrollIndicator from '../hooks/useScrollIndicator';
import useOnOutsideClick from '../hooks/useOnOutsideClick';
import navItems from '../data/navItems';
import useScrollDirection from '../hooks/useScrollDirection';

function Nav() {

    const [menu, setMenu] = useState(false);
    const ref = useRef(null);
    const themesRef = useRef(null);
    const scrollPercentage = useScrollIndicator();
    useOnOutsideClick(ref, () => { setMenu(false) });
    const scrollDirection = useScrollDirection();

    useOnOutsideClick(themesRef, () => {
        setShowThemes(false);
    });

    useEffect(() => {
        if (scrollDirection === 'down') {
            setShowThemes(false);
        }
    }, [scrollDirection])

    const [showThemes, setShowThemes] = useState(false);

    return <div className={`h-[60px] fixed top-0 left-0 right-0 z-10 bg-base-100 shadow-sm font-sans transition-all duration-500 ease-in-out ${scrollDirection === 'down' ? '-translate-y-[100%]' : 'translate-y-0'}`}>
        <div className="h-full px-6 flex flex-row justify-between items-center">
            <a href="/#home" className="text-xl font-bold hover:text-accent transition-all duration-300 ease-in-out text-typography">iamsuryasonar<span className="text-accent">.dev</span></a>
            <div className="flex justify-between items-center gap-4">
                <div ref={themesRef}>
                    <button onClick={() => setShowThemes(!showThemes)} className='text-base hover:text-accent text-typography hover:underline underline-offset-4'>
                        <FontAwesomeIcon className='md:hidden text-2xl outline-none hover:scale-125 transition-all duration-300 ease-in-out text-typography cursor-pointer' icon={faPalette} />
                        <p className='hidden md:block'>Theme</p>
                    </button>
                    {
                        showThemes &&
                        <div className='fixed top-[70px] right-10 md:right-auto w-[150px] flex flex-col gap-2 p-2 bg-base-200 shadow-md rounded-md'
                            onKeyDown={(e) => {
                                if (e.key === 'Escape') setShowThemes(false);
                            }}>
                            <ThemeCard item={'light'} setShowThemes={setShowThemes} textColor={'#2b3440'} bgColor={'#f1f1f1'} />
                            <ThemeCard item={'dark'} setShowThemes={setShowThemes} textColor={'#eeeeee'} bgColor={'#12171d'} />
                            <ThemeCard item={'cupcake'} setShowThemes={setShowThemes} textColor={'#030303'} bgColor={'#efeae6'} />
                            <ThemeCard item={'aqua'} setShowThemes={setShowThemes} textColor={'#d4deef'} bgColor={'#2e5497'} />
                        </div>
                    }
                </div>

                <div className="hidden md:flex md:flex-row md:justify-between md:gap-4 text-base ">
                    {navItems.map((item) => {
                        return <a key={item.id} href={item.path} className="text-base hover:text-accent hover:underline underline-offset-4 text-typography">{item.title}</a>
                    })}
                    <Link to='/links' className="text-base hover:text-accent  text-typography hover:underline underline-offset-4 ">Links</Link>
                </div>
                <button className='p-1 md:hidden' onClick={() => setMenu(true)}
                    aria-label='open menu'>
                    <FontAwesomeIcon className="text-2xl outline-none hover:scale-125 transition-all duration-300 ease-in-out text-typography cursor-pointer"
                        icon={faBars}
                    />
                </button>
            </div>
        </div>
        <div className="z-20 h-[1px] bg-base-100-100 w-full">
            <div style={{ width: scrollPercentage + "%" }} className="h-[2px] bg-accent"></div>
        </div>
        {/* menu */}

        <div
            role="dialog"
            aria-modal="true"
            aria-hidden={!menu}
            style={{
                transform: menu ? 'translateX(0%)' : 'translateX(120%)',
            }}
            ref={ref}
            onKeyDown={(e) => {
                if (e.key === 'Escape') setMenu(false);
            }}
            className='bg-base-100 px-6 transition-all duration-700 ease-in-out flex flex-col justify-center items-end gap-6 h-screen fixed inset-0 md:hidden z-10'
        >
            <p aria-hidden='true' className="absolute -rotate-90 left-14 -translate-x-1/2 text-[100px] font-extrabold text-base-200 opacity-40">iamsuryasonar<span className="text-accent opacity-40">.dev</span></p>
            <FocusTrap active={menu}>
                <div>
                    {
                        <button
                            className='p-1 fixed top-2 right-6'
                            tabIndex={menu ? 0 : -1}
                            onClick={() => setMenu(false)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setMenu(false)
                                }
                            }}
                            aria-label='close menu'>
                            <FontAwesomeIcon className="z-20 outline-none text-3xl hover:scale-125 transition-all duration-300 ease-in-out text-typography cursor-pointer"
                                icon={faXmark}
                            />
                        </button>
                    }
                    <div
                        className='w-full text-3xl font-extrabold font-sans border-r-[2px] border-accent border-opacity-75 pr-4 z-20 flex flex-col items-end gap-6 transition-all delay-300 duration-700 ease-in-out'
                        style={{
                            transform: menu ? 'translateX(0%)' : 'translateX(100%)',
                        }}
                    >
                        {
                            <>
                                {navItems.map((item) => {
                                    return <React.Fragment key={item.id}>
                                        <a
                                            tabIndex={menu ? 0 : -1}
                                            href={item.path}
                                            onClick={() => setMenu(false)}
                                            className="overflow-hidden text-typography hover:text-accent transition-all duration-300 ease-in-out ">
                                            {item.title}
                                        </a>
                                    </React.Fragment>
                                })}
                                <Link
                                    tabIndex={menu ? 0 : -1}
                                    to='/links'
                                    onClick={() => setMenu(false)}
                                    className="z-20 self-end text-typography hover:text-accent transition-all duration-300 ease-in-out">
                                    Links
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </FocusTrap>
        </div>
    </div >
}

export default Nav;


function ThemeCard({ item, setShowThemes, textColor, bgColor }) {
    const { theme, updateTheme } = useContext(ThemeContext);

    function setTheme(theme) {
        updateTheme(theme);
        setShowThemes(false);
    }

    return <button onClick={() => setTheme(item)}
        style={{
            backgroundColor: bgColor,
            color: textColor,
        }} className={`flex gap-2 items-center px-4 py-1 shadow-md rounded-md hover:scale-x-[1.1] transition-transform duration-400 ease-in-out cursor-pointer`}>
        {
            (item === theme) && <FontAwesomeIcon icon={faCheck} />
        }
        <p>{item}</p>
    </button>
}