import { Box } from '@mui/system';
import React from 'react';
import Blogs from './Blogs';
import Sidebar from './Sidebar';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    blog: {
        width: '100%',
        display: ' flex',
        float: 'left',
        flexWrap: 'wrap',
    },
    blog1: {
        width: '67%',
        display: 'block',
    },
    blog2: {
        width: '33%',
        display: 'block',
    },
})

const ContentBlog = () => {
    const classes = useStyles();
    return (
        <Box className={classes.blog}>
            <Box className={classes.blog1}>
                <Blogs />
            </Box>
            <Box className={classes.blog2}>
                <Sidebar />
            </Box>
        </Box>
    )
}

export default ContentBlog
