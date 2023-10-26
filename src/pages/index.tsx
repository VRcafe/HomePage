import React, { FC } from 'react'
import { Header } from '../components/Header'

const IndexPage: FC = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          backgroundImage: 'url(/images/flower-back1042.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <div className="App">
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
        </div>
      </div>
      <div>kkk</div>
    </>
  )
}

export default IndexPage
