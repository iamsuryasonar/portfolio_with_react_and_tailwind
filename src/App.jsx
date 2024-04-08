import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavAndOutlet from './components/NavAndOutlet'
import LinkPage from './pages/LinkPage'
import React from 'react';
import ThemeProvider from './contexts/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Routes >
        <Route element={<NavAndOutlet />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/links' element={<LinkPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
