import './App.css'
import React from 'react'
import { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import MenuPage from './pages/menu/detail'
import RepresentativePage from './pages/introduction/representative'
import ViceRepresentativePage from './pages/introduction/viceRepresentative'
import IntroductionPage from './pages/introduction/detail'
import ScrollToTop from './components/ScrollToTop'

const Pages = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cases" element />
        <Route path="/representative" element={<RepresentativePage />} />
        <Route path="/viceRepresentative" element={<ViceRepresentativePage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
      </Routes>
    </>
  )
}

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Pages />
      </HashRouter>
    </>
  )
}

export default App
