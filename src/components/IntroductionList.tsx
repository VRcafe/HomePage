import React, { FC } from 'react'
import { ImageListItem, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const RepresentativeList: FC = () => {
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
          <ArrowForwardIosIcon fontSize="small" />
          副代表
        </Typography>
      </ImageListItem>
    </>
  )
}

export const GroupList: FC = () => {
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
    </>
  )
}
