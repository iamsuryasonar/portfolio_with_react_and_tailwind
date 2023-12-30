import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavAndOutlet from './components/NavAndOutlet'
import LinkPage from './pages/LinkPage'
function App() {
  return (
    <Routes >
      <Route element={<NavAndOutlet />}>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/links' element={<LinkPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
