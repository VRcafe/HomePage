import './App.css'
import React from 'react'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import MenuPage from './pages/menu/detail'
import RepresentativePage from './pages/introduction/representative'
import ViceRepresentativePage from './pages/introduction/viceRepresentative'
import IntroductionPage from './pages/introduction/detail'

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cases" element />
        <Route path="/introduction/representative" element={<RepresentativePage />} />
        <Route path="/introduction/viceRepresentative" element={<ViceRepresentativePage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
      </Routes>
    </>
  )
}

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
