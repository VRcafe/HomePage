import { Grid, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { Header } from '../../components/Header'
import '../../style.css'

const MenuPage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:1000px)')
  return (
    <>
      <Header />
      <Typography fontFamily="Shippori Mincho B1" align="center" variant="h4" fontWeight="bold">
        メニュー
      </Typography>
      <Box margin={5} flexDirection="column">
        {matches ? (
          <Grid container justifyContent="space-around" flexWrap="nowrap" columnGap={2}>
            <ImageListItem style={{ width: '50%' }}>
              <img src="images/menu1.jpg" alt="" />
            </ImageListItem>
            <ImageListItem style={{ width: '50%' }}>
              <img src="images/menu2.jpg" alt="" />
            </ImageListItem>
          </Grid>
        ) : (
          <Grid container justifyContent="space-around" flexWrap="wrap" rowGap={2}>
            <ImageListItem style={{ width: '100%' }}>
              <img src="images/menu1.jpg" alt="" />
            </ImageListItem>
            <ImageListItem style={{ width: '100%' }}>
              <img src="images/menu2.jpg" alt="" />
            </ImageListItem>
          </Grid>
        )}
      </Box>
    </>
  )
}

export default MenuPage
