import { Box } from '@mui/material'
import React from 'react'
import Topheader from './header/Topheader';
import Navbar from './header/Navbar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    width: '100%',
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <Topheader />
      <Navbar/>
    </Box>
  )
}

export default Header
