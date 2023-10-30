import React, { FC } from 'react'
import { ImageListItem, Typography } from '@mui/material'

export const GroupList: FC = () => {
  const imgStyle: React.CSSProperties = {
    height: '400px',
    objectFit: 'cover',
  }
  return (
    <>
      <ImageListItem>
        <img src="images/greenTea2.jpg" alt="" style={imgStyle} />
        <Typography
          padding={1}
          position="absolute"
          bottom={0}
          right={0}
          color="white"
          alignItems="center"
          variant="h6"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          お茶班
        </Typography>
      </ImageListItem>
      <ImageListItem>
        <img src="images/kaikei.jpg" alt="" style={imgStyle} />
        <Typography
          padding={1}
          position="absolute"
          bottom={0}
          right={0}
          color="white"
          alignItems="center"
          variant="h6"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          会計班
        </Typography>
      </ImageListItem>
      <ImageListItem>
        <img src="images/sekkyaku.jpg" alt="" style={imgStyle} />
        <Typography
          padding={1}
          position="absolute"
          bottom={0}
          right={0}
          color="white"
          alignItems="center"
          variant="h6"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          接客班
        </Typography>
      </ImageListItem>
      <ImageListItem>
        <img src="images/kouhou.jpg" alt="" style={imgStyle} />
        <Typography
          padding={1}
          position="absolute"
          bottom={0}
          right={0}
          color="white"
          alignItems="center"
          variant="h6"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          広報班
        </Typography>
      </ImageListItem>
      <ImageListItem>
        <img src="images/kurafan.jpg" alt="" style={imgStyle} />
        <Typography
          padding={1}
          position="absolute"
          bottom={0}
          right={0}
          color="white"
          alignItems="center"
          variant="h6"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          クラファン班
        </Typography>
      </ImageListItem>
      <ImageListItem>
        <img src="images/soushoku.jpg" alt="" style={imgStyle} />
        <Typography
          padding={1}
          position="absolute"
          bottom={0}
          right={0}
          color="white"
          alignItems="center"
          variant="h6"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          装飾班
        </Typography>
      </ImageListItem>
      <ImageListItem>
        <img src="images/vr.jpg" alt="" style={imgStyle} />
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
          VR班
        </Typography>
      </ImageListItem>
    </>
  )
}
