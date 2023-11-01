import React, { FC } from 'react'
import { Grid, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router-dom'

export const RepresentativeList: FC = () => {
  const navigate = useNavigate()
  const matches: boolean = useMediaQuery('(min-width:600px)')
  return (
    <>
      {matches ? (
        <Grid container wrap="nowrap" columnGap={2}>
          <ImageListItem
            sx={{
              width: '50%',
              ':hover': {
                transitionTimingFunction: 'ease',
                transitionDuration: '0.5s',
                transform: 'scale(1.05, 1.05)',
                opacity: '0.5',
              },
            }}
            onClick={() => navigate('/representative')}
          >
            <img src="images/mokkun_1.jpg" alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
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
              代表
            </Typography>
          </ImageListItem>
          <ImageListItem
            sx={{
              width: '50%',
              ':hover': {
                transitionTimingFunction: 'ease',
                transitionDuration: '0.5s',
                transform: 'scale(1.05, 1.05)',
                opacity: '0.5',
              },
            }}
            onClick={() => navigate('/viceRepresentative')}
          >
            <img src="images/kato_1.jpg" alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
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
              副代表
            </Typography>
          </ImageListItem>
        </Grid>
      ) : (
        <Grid container rowGap={2}>
          <ImageListItem
            sx={{
              width: '100%',
              ':hover': {
                transitionTimingFunction: 'ease',
                transitionDuration: '0.5s',
                transform: 'scale(1.05, 1.05)',
                opacity: '0.5',
              },
            }}
            onClick={() => navigate('/representative')}
          >
            <img src="images/mokkun_1.jpg" alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
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
              代表
            </Typography>
          </ImageListItem>
          <ImageListItem
            sx={{
              width: '100%',
              ':hover': {
                transitionTimingFunction: 'ease',
                transitionDuration: '0.5s',
                transform: 'scale(1.05, 1.05)',
                opacity: '0.5',
              },
            }}
            onClick={() => navigate('/viceRepresentative')}
          >
            <img src="images/kato_1.jpg" alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
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
              副代表
            </Typography>
          </ImageListItem>
        </Grid>
      )}
    </>
  )
}
