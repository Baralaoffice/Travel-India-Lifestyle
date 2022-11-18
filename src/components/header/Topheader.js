import { Box } from '@mui/system'
import React from 'react'
import Search from './social header/Search'
import Social from './social header/Social'
import ThemeTitle from './social header/ThemeTitle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  main: {
    width: '100%',
    backgroundColor: ' #f9f9f9',
  },
  topheader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
  },
});

const Topheader = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <Box className={classes.topheader}>
        <Social />
        <ThemeTitle />
        <Search />
      </Box>
    </Box>
  )
}

export default Topheader
