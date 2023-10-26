import React, { FC } from 'react'
import { Header } from '../components/Header'
import { Typography } from '@mui/material'

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
          <Typography ml={20} variant="h4" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
            {'お茶と、'}
            <br />
            {'　　VRと、'}
            <br />
            {'　　　　AIと。'}
          </Typography>
        </div>
      </div>
      <div>kkk</div>
    </>
  )
}

export default IndexPage
