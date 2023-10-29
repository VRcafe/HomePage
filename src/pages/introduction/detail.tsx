import { Box, Grid, ImageList, Typography, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { GroupList, RepresentativeList } from '../../components/IntroductionList'

const IntroductionPage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Box component="section" margin={2}>
        <Typography align="center" variant="h4" sx={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>
          ー ABOUT US ー
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
