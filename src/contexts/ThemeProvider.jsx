import { useEffect, useState, createContext } from 'react'

export const ThemeContext = createContext('dark');

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    useEffect(() => {

        let isSystemThemeDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

        let systemTheme;
        if (isSystemThemeDark) systemTheme = 'dark';

        if (!theme) {
            localStorage.setItem('theme', systemTheme);
        }

        setTheme(localStorage.getItem('theme'));

    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    function updateTheme(theme) {
        setTheme(theme)
    }

    return <ThemeContext.Provider value={{ theme, updateTheme }}>
        {children}
    </ThemeContext.Provider>

}

export default ThemeProvider