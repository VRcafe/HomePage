import React, { FC } from 'react'
import { AppBar, Toolbar, Slide, useScrollTrigger, Typography } from '@mui/material'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

const HideOnScroll: FC<Props> = (props) => {
  const { window, children } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export const Header: FC = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <img src="/images/logo.png" height={100} width={100} alt="" />
            <Typography color="black" component="label" ml={1} sx={{ flexGrow: 1 }} variant="h6"></Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
