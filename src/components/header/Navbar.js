import { AppBar, Toolbar } from '@mui/material'
// import { Box } from '@mui/system'
import React from 'react'
import Logo from './navbar/Logo'
import Nav from './navbar/Nav'
import ThemeNav from './navbar/ThemeNav';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  AppBar:{
    background: 'none !important',
    boxShadow:'none !important',
    width: '100%',
    paddingBottom:' 15px',
    paddingTop: '5px',
    marginBottom:' 30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1400px',
    fontFamily: 'Lato ,sans-serif',
  },
  navflex:{
    justifyContent:'space-between',
    borderBottom: '1px solid #f1f1f1',
    margin: 'auto',
    paddingBottom: '30px'
  }
})

const Navbar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.navflex}>
          <Nav />
          <Logo />
          <ThemeNav />
          </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
