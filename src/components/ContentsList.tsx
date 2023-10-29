import React, { FC } from 'react'
import { ImageListItem, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router-dom'

export const ContentsList: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <ImageListItem
        sx={{
          ':hover': {
            transitionTimingFunction: 'ease',
            transitionDuration: '0.5s',
            transform: 'scale(1.05, 1.05)',
            opacity: '0.5',
          },
        }}
        onClick={() => navigate('/contents/greenTea')}
      >
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
      <ImageListItem
        sx={{
          ':hover': {
            transitionTimingFunction: 'ease',
            transitionDuration: '0.5s',
            transform: 'scale(1.05, 1.05)',
            opacity: '0.5',
          },
        }}
        onClick={() => navigate('/contents/vr')}
      >
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
      <ImageListItem
        sx={{
          ':hover': {
            transitionTimingFunction: 'ease',
            transitionDuration: '0.5s',
            transform: 'scale(1.05, 1.05)',
            opacity: '0.5',
          },
        }}
        onClick={() => navigate('/contents/ai')}
      >
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
