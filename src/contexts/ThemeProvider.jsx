import { useEffect, useState, createContext } from 'react'

export const ThemeContext = createContext('light');

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') setTheme(true);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme);
        localStorage.setItem('theme', theme ? 'dark' : 'light');
    }, [theme]);

    function setToggleTheme() {
        setTheme(!theme)
    }

    return <ThemeContext.Provider value={{ theme, setToggleTheme }}>
        {children}
    </ThemeContext.Provider>

}

export default ThemeProvider