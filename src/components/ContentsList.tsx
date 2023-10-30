import React, { FC } from 'react'
import { Box, Grid, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import '../style.css'

export const ContentsList: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:600px)')
  const imgStyle: React.CSSProperties = {
    width: '30vw',
    height: '300px',
    objectFit: 'cover',
  }
  const reducedImgStyle: React.CSSProperties = {
    width: '90vw',
    height: '300px',
    objectFit: 'cover',
  }
  return (
    <>
      {matches ? (
        <Grid container justifyContent="space-around" flexWrap="nowrap" columnGap={2}>
          <ImageListItem>
            <Box>
              <img src="images/greentea.png" alt="" style={imgStyle} />
              <Typography fontFamily="Shippori Mincho B1" marginTop={2} align="center" variant="h5">
                お茶
              </Typography>
              <Typography align="center" variant="body1">
                鹿児島県の頴娃茶の1番茶を
                <br />
                熟練したメンバーが丁寧に急須で淹れます。
              </Typography>
            </Box>
          </ImageListItem>
          <ImageListItem>
            <Box>
              <img src="images/VR2.jpg" alt="" style={imgStyle} />
              <Typography fontFamily="Shippori Mincho B1" marginTop={2} align="center" variant="h5">
                VR
              </Typography>
              <Typography align="center" variant="body1">
                VRで宇宙空間や花火を楽しみながら
                <br />
                お茶を飲むことができます。
              </Typography>
            </Box>
          </ImageListItem>
          <ImageListItem>
            <Box>
              <img src="images/rikyu.jpg" alt="" style={imgStyle} />
              <Typography fontFamily="Shippori Mincho B1" marginTop={2} align="center" variant="h5">
                AI
              </Typography>
              <Typography align="center" variant="body1">
                個性あふれるキャラクターとお話ししながら
                <br />
                お茶やお菓子を楽しめます。
              </Typography>
            </Box>
          </ImageListItem>
        </Grid>
      ) : (
        <Grid container justifyContent="space-around" flexWrap="wrap" rowGap={2}>
          <ImageListItem>
            <Box>
              <img src="images/greentea.png" alt="" style={reducedImgStyle} />
              <Typography marginTop={2} align="center" variant="h5">
                お茶
              </Typography>
              <Typography align="center" variant="body1">
                鹿児島県の頴娃茶の1番茶を
                <br />
                熟練したメンバーが丁寧に急須で淹れます。
              </Typography>
            </Box>
          </ImageListItem>
          <ImageListItem>
            <Box>
              <img src="images/VR2.jpg" alt="" style={reducedImgStyle} />
              <Typography marginTop={2} align="center" variant="h5">
                VR
              </Typography>
              <Typography align="center" variant="body1">
                VRで宇宙空間や花火を楽しみながら
                <br />
                お茶を飲むことができます。
              </Typography>
            </Box>
          </ImageListItem>
          <ImageListItem>
            <Box>
              <img src="images/rikyu.jpg" alt="" style={reducedImgStyle} />
              <Typography marginTop={2} align="center" variant="h5">
                AI
              </Typography>
              <Typography align="center" variant="body1">
                個性あふれるキャラクターとお話ししながら
                <br />
                お茶やお菓子を楽しめます。
              </Typography>
            </Box>
          </ImageListItem>
        </Grid>
      )}
    </>
  )
}
