import './App.css'
import React from 'react'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import MissionsPage from './pages/missions/detail'
import GreenTeaPage from './pages/contents/greenTea'
import VRPage from './pages/contents/vr'
import AIPage from './pages/contents/ai'
import RepresentativePage from './pages/introduction/representative'
import ViceRepresentativePage from './pages/introduction/viceRepresentative'
import IntroductionPage from './pages/introduction/detail'

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/contents/greenTea" element={<GreenTeaPage />} />
        <Route path="/contents/vr" element={<VRPage />} />
        <Route path="/contents/ai" element={<AIPage />} />
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
