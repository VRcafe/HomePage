import React, { FC } from 'react'
import { ImageListItem, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const ContentsList: FC = () => {
  return (
    <>
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
          <ArrowForwardIosIcon fontSize="small" />
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
          <ArrowForwardIosIcon fontSize="small" />
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
          <ArrowForwardIosIcon fontSize="small" />
          AI
        </Typography>
      </ImageListItem>
    </>
  )
}
