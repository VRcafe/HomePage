import { Box, ImageList, Typography, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { GroupList, RepresentativeList } from '../../components/IntroductionList'

const IntroductionPage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:600px)')
  return (
    <>
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
    </>
  )
}

export default IntroductionPage
