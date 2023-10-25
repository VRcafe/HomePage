import './App.css'
import React from 'react'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/index'

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
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
