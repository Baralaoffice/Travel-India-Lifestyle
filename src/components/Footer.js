import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Testimonials from './footer/Testimonials';


  const useStyles = makeStyles({
    footer:{
      width:'100%',
      float: 'left'
    }

  });


const Footer = () => {
  const classes = useStyles();
  return (
    <Box className = {classes.footer}>
    <Testimonials/>
    </Box>
  )
}

export default Footer
