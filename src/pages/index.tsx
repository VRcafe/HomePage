import React, { FC } from 'react'
import { Header } from '../components/Header'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { ContentsList } from '../components/ContentsList'
import { RepresentativeList } from '../components/ReresentativeList'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { useNavigate } from 'react-router-dom'
import '../style.css'

const IndexPage: FC = () => {
  const navigate = useNavigate()
  const matches: boolean = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundImage: 'url(images/flower-back1042.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />

        <Typography
          fontFamily="Shippori Mincho B1"
          width="40%"
          variant="h5"
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
        >
          {'お茶と、'}
          <br />
          {'　　VRと、'}
          <br />
          {'　　　　AIと。'}
          <br />
        </Typography>
      </Box>
      {/* --- 使命 --- */}
      <Box component="section" margin={2}>
        <Typography
          fontFamily="Shippori Mincho B1"
          align="center"
          variant="h4"
          sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}
        >
          新感覚エンターテイメント日本茶カフェ
        </Typography>
        <Typography align="center" variant="h6">
          アナログとデジタルの有効的融合で人々の暮らしや感性を豊かにすることを使命に、
          <br />
          VR・AI技術とお茶を組み合わせて五感をフルに刺激して新感覚の癒しを提供する日本茶カフェです。
          <br />
          11月4日（土）・5日（日）に開催される第76回九州大学の大学祭「九大祭」にて、お待ちしています！
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
          onClick={() => navigate('/HomePage/menu')}
        >
          <ArrowForwardIosIcon fontSize="small" />
          <Typography marginLeft="auto" marginRight="auto" variant="body1" color="white">
            メニュー
          </Typography>
        </Box>
      </Box>
      {/* --- コンテンツ --- */}
      <Box component="section" margin={2}>
        <Typography
          fontFamily="Shippori Mincho B1"
          align="center"
          variant="h4"
          sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}
        >
          コンテンツ
        </Typography>
        <ContentsList />
      </Box>
      {/* --- 実績 --- */}
      <Box component="section" margin={2}>
        <Typography
          fontFamily="Shippori Mincho B1"
          align="center"
          variant="h4"
          sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}
        >
          実績
        </Typography>
        <Typography align="center" variant="h6">
          第76回九大祭出店
        </Typography>
      </Box>
      {/* --- ABOUT US --- */}
      <Box component="section" margin={2}>
        <Typography
          fontFamily="Shippori Mincho B1"
          align="center"
          variant="h4"
          sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}
        >
          私たちについて
        </Typography>
        {matches ? (
          <Grid container justifyContent="space-around" flexWrap="nowrap" columnGap={2}>
            <RepresentativeList />
          </Grid>
        ) : (
          <Grid container flexWrap="wrap" rowGap={2}>
            <RepresentativeList />
          </Grid>
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
        onClick={() => navigate('/HomePage/introduction')}
      >
        <ArrowForwardIosIcon fontSize="small" />
        <Typography marginLeft="auto" marginRight="auto" variant="body1" color="white">
          もっと見る
        </Typography>
      </Box>
      {/* --- ブログ --- */}
      <Box component="section">
        <Typography
          fontFamily="Shippori Mincho B1"
          align="center"
          variant="h4"
          sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}
        >
          ブログ
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
            <img src="images/logo-black.png" alt="" style={{ width: '50px' }} />
          </a>
        </Box>
      </Box>
      {/* --- オンラインショップ --- */}
      <Box component="section">
        <Typography
          fontFamily="Shippori Mincho B1"
          align="center"
          variant="h4"
          sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}
        >
          オンラインショップ
        </Typography>
        <Typography align="center" variant="h6">
          Coming soon...
        </Typography>
      </Box>
      <Box
        alignItems="center"
        justifyItems="center"
        display="flex"
        width="20vw"
        padding={2}
        marginLeft="auto"
        marginTop={5}
        marginBottom={5}
        marginRight={2}
        color="white"
        sx={{ background: '#627b54', ':hover': { backgroundColor: '#485A3E' } }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardDoubleArrowUpIcon fontSize="small" />
        <Typography marginLeft="auto" marginRight="auto" align="center" variant="body1" color="white">
          トップへ
        </Typography>
      </Box>
    </>
  )
}

export default IndexPage
