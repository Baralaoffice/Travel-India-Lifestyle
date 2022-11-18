import { Box } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import Author from './sidebar/Author';
import Recent from './sidebar/Recent';
import Archieve from './sidebar/Archieve';
import Subscribe from './sidebar/Subscribe';


const useStyles = makeStyles({
    msinside:{
        paddingLeft: '50px'
    }
})

const Sidebar = () => {
    const classes = useStyles();
  return (
    <Box className={classes.msinside}>
        <Author/>
        <Recent/>
        <Archieve/>
        <Subscribe/>
    </Box>
  )
}

export default Sidebar
