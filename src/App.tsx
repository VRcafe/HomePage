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
        <Route path="/HomePage/#/HomePage" element={<IndexPage />} />
        <Route path="/HomePage/#/menu" element={<MenuPage />} />
        <Route path="/HomePage/#/cases" element />
        <Route path="/HomePage/#/representative" element={<RepresentativePage />} />
        <Route path="/HomePage/#/viceRepresentative" element={<ViceRepresentativePage />} />
        <Route path="/HomePage/#/introduction" element={<IntroductionPage />} />
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
