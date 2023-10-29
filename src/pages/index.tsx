import React, { FC } from 'react'
import { Header } from '../components/Header'
import { ImageList, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { ContentsList } from '../components/ContentsList'
import { RepresentativeList } from '../components/IntroductionList'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { useNavigate } from 'react-router-dom'

const IndexPage: FC = () => {
  const navigate = useNavigate()
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
      {/* --- 使命 --- */}
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー OUR MISSIONS ー
        </Typography>
        <Typography align="center" variant="h6">
          アナログとデジタルの有効的融合で人々の暮らしや感性を豊かにする
        </Typography>
        <Box
          alignItems="center"
          justifyItems="center"
          display="flex"
          width="30vw"
          padding={2}
          marginTop={5}
          marginLeft="auto"
          marginRight="auto"
          color="white"
          sx={{ background: '#627b54', ':hover': { backgroundColor: '#485A3E' } }}
          onClick={() => navigate('/missions')}
        >
          <ArrowForwardIosIcon fontSize="small" />
          <Typography marginLeft="auto" marginRight="auto" variant="h6" color="white">
            view more
          </Typography>
        </Box>
      </Box>
      {/* --- コンテンツ --- */}
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
      {/* --- 実績 --- */}
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー CASES ー
        </Typography>
        <Typography align="center" variant="h6">
          第76回九大祭
        </Typography>
      </Box>
      {/* --- メンバー --- */}
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
      </Box>
      <Box
        alignItems="center"
        justifyItems="center"
        display="flex"
        width="30vw"
        padding={2}
        marginTop={5}
        marginLeft="auto"
        marginRight="auto"
        color="white"
        sx={{ background: '#627b54', ':hover': { backgroundColor: '#485A3E' } }}
        onClick={() => navigate('/introduction')}
      >
        <ArrowForwardIosIcon fontSize="small" />
        <Typography marginLeft="auto" marginRight="auto" variant="h6" color="white">
          view more
        </Typography>
      </Box>
      {/* --- ブログ --- */}
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
      {/* --- オンラインショップ --- */}
      <Box component="section">
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー ONLINE SHOP ー
        </Typography>
      </Box>
      <Box
        alignItems="center"
        justifyItems="center"
        display="flex"
        width="20vw"
        padding={2}
        marginLeft="auto"
        marginBottom={5}
        marginRight={2}
        color="white"
        sx={{ background: '#627b54', ':hover': { backgroundColor: '#485A3E' } }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardDoubleArrowUpIcon fontSize="small" />
        <Typography marginLeft="auto" marginRight="auto" align="center" variant="h6" color="white">
          back to top
        </Typography>
      </Box>
    </>
  )
}

export default IndexPage
