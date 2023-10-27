import React, { FC } from 'react'
import { Header } from '../components/Header'
import { ImageList, ImageListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const IndexPage: FC = () => {
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
        <ImageList cols={3} gap={20}>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              お茶
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              VR
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              AI
            </Typography>
          </ImageListItem>
        </ImageList>
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
        <ImageList cols={2} gap={20}>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              代表
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              副代表
            </Typography>
          </ImageListItem>
        </ImageList>
        <ImageList cols={4} gap={20}>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              お茶班
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              会計班
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              接客班
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              広報班
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              クラファン班
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              装飾班
            </Typography>
          </ImageListItem>
          <ImageListItem>
            <img src="images/greentea.png" alt="" />
            <Typography
              padding={1}
              display="inline-flex"
              position="absolute"
              bottom={0}
              right={0}
              color="white"
              alignItems="center"
              variant="h6"
              sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ArrowForwardIosIcon />
              VR班
            </Typography>
          </ImageListItem>
        </ImageList>
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
