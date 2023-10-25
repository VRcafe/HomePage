import React from 'react'
import { FC } from 'react'
import logo from '../logo.svg'

const IndexPage: FC = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/pages/index.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </header>
      </div>
    </>
  )
}

export default IndexPage
