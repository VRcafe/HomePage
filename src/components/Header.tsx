import React, { FC, useState } from 'react'
import { AppBar, Toolbar, Typography, Drawer, Button, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

export const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <img src="/images/logo.png" height={100} width={100} alt="" />
          <Typography color="black" component="label" ml={1} sx={{ flexGrow: 1 }} variant="h6"></Typography>
          <Button onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon fontSize="large" sx={{ color: 'black' }} />
          </Button>
          <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <List sx={{ width: '30vw' }}>
              <CloseIcon
                fontSize="large"
                sx={{
                  float: 'right',
                  marginTop: 2,
                  marginRight: 2,
                  ':hover': {
                    transitionTimingFunction: 'ease',
                    transitionDuration: '0.5s',
                    transform: 'scale(1.2, 1.2)',
                  },
                }}
                onClick={() => setIsDrawerOpen(false)}
              />
              <ListItem
                sx={{
                  display: 'inline-block',
                  ':hover': {
                    transitionTimingFunction: 'ease',
                    transitionDuration: '0.5s',
                    transform: 'scale(1.2, 1.2)',
                  },
                }}
                onClick={() => navigate('/')}
              >
                <Typography align="center" marginBlock={2} variant="h6">
                  HOME
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
                onClick={() => navigate('/menu')}
              >
                <Typography align="center" marginBlock={2} variant="h6">
                  MENU
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
                <Typography align="center" marginBlock={2} variant="h6" onClick={() => navigate('/introduction')}>
                  ABOUT US
                </Typography>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  )
}
