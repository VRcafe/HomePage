import React, { FC, useState } from 'react'
import { AppBar, Toolbar, Slide, useScrollTrigger, Typography, Drawer, Button, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <HideOnScroll>
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <img src="/images/logo.png" height={100} width={100} alt="" />
            <Typography color="black" component="label" ml={1} sx={{ flexGrow: 1 }} variant="h6"></Typography>
            <Button onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon fontSize="large" sx={{ color: 'black' }} />
            </Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
              <List sx={{ width: '30vw' }}>
                <ListItem
                  sx={{
                    display: 'inline-block',
                    ':hover': {
                      transitionTimingFunction: 'ease',
                      transitionDuration: '0.5s',
                      transform: 'scale(1.2, 1.2)',
                    },
                  }}
                  onClick={() => navigate('/missions')}
                >
                  <Typography align="center" marginBlock={2}>
                    OUR MISSIONS
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'inline-block',
                    ':hover': {
                      transitionTimingFunction: 'ease',
                      transitionDuration: '0.5s',
                      transform: 'scale(1.2, 1.2)',
                    },
                  }}
                >
                  <Typography align="center" marginBlock={2} onClick={() => navigate('/introduction')}>
                    ABOUT US
                  </Typography>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
