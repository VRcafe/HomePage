import React, { FC } from 'react'
import { Header } from '../components/Header'
import { ImageList, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { ContentsList } from '../components/ContentsList'
import { RepresentativeList, GroupList } from '../components/IntroductionList'

const IndexPage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          backgroundImage: 'url(/images/flower-back1042.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />

        <Typography width="30vw" variant="h4" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          {'お茶と、'}
          <br />
          {'　　VRと、'}
          <br />
          {'　　　　AIと。'}
        </Typography>
      </Box>
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー OUR MISSIONS ー
        </Typography>
        <Typography align="center" variant="h6">
          アナログとデジタルの有効的融合で人々の暮らしや感性を豊かにする
        </Typography>
      </Box>
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー CONTENTS ー
        </Typography>
        {matches ? (
          <ImageList cols={3} gap={20}>
            <ContentsList />
          </ImageList>
        ) : (
          <ImageList cols={1} gap={20}>
            <ContentsList />
          </ImageList>
        )}
      </Box>
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー CASES ー
        </Typography>
        <Typography align="center" variant="h6">
          第76回九大祭
        </Typography>
      </Box>
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー ABOUT US ー
        </Typography>
        {matches ? (
          <ImageList cols={2} gap={20}>
            <RepresentativeList />
          </ImageList>
        ) : (
          <ImageList cols={1} gap={20}>
            <RepresentativeList />
          </ImageList>
        )}
        {matches ? (
          <ImageList cols={4} gap={20}>
            <GroupList />
          </ImageList>
        ) : (
          <ImageList cols={1} gap={20}>
            <GroupList />
          </ImageList>
        )}
      </Box>
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー BLOG ー
        </Typography>
        <Box textAlign="center">
          <a href="https://www.instagram.com/virtualcafe_0508/">
            <img
              src="images/Instagram_Glyph_Black.png"
              alt=""
              style={{ width: '50px', margin: 'auto', paddingRight: 30 }}
            />
          </a>
          <a href="https://twitter.com/_virtualcafe">
            <img src="/images/logo-black.png" alt="" style={{ width: '50px' }} />
          </a>
        </Box>
      </Box>
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー ONLINE SHOP ー
        </Typography>
      </Box>
    </>
  )
}

export default IndexPage
