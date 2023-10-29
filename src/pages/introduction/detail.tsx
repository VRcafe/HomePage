import { Box, ImageList, Typography, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { RepresentativeList } from '../../components/ReresentativeList'
import { GroupList } from '../../components/GroupList'
import { Header } from '../../components/Header'

const IntroductionPage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Header />
      <Box component="section" margin={2}>
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー 代表・副代表の紹介 ー
        </Typography>
        <RepresentativeList />

        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー 各班の紹介 ー
        </Typography>
        {matches ? (
          <ImageList cols={2} gap={20}>
            <GroupList />
          </ImageList>
        ) : (
          <ImageList cols={1} gap={20}>
            <GroupList />
          </ImageList>
        )}
      </Box>
    </>
  )
}

export default IntroductionPage
