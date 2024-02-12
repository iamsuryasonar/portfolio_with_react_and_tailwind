import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavAndOutlet from './components/NavAndOutlet'
import LinkPage from './pages/LinkPage'
import React from 'react';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') setTheme(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme);
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes >
        <Route element={<NavAndOutlet />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/links' element={<LinkPage />}></Route>
        </Route>
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
