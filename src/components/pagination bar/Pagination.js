import { Pagination } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles({
  Pagination:{
    width:'100%',
    float: 'left',
    textAlign: 'center'
  },
  nav:{
    '& ul':{
      justifyContent:'center',
    margin:' 21px',
    }
  }
})

const Paginationbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Pagination}>
      <Pagination color="secondary" count={5} shape="rounded" className={classes.nav} />
    </Box>
  )
}

export default Paginationbar
