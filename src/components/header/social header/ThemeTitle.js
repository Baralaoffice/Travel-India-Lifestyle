import { Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  ThemeTitle:{
    position: 'relative',
    top: 0,
    left: '50px',
    transform: 'translate(-50%,0)'
  }
})

const ThemeTitle = () => {
  const classes = useStyles()

  return (
    <div className={classes.ThemeTitle}>
      <Typography>Travel & Lifestyle Webnitter Theme</Typography>
    </div>
  )
}

export default ThemeTitle
