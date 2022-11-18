import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import Social from '../../components/header/social header/Social';


const useStyles = makeStyles({
    Author: {
        fontSize: '16px',
        marginBottom: '50px',
        width: '100%',
        '& a': {
            textDecoration: 'none',
            fontSize: '25px',
            color: '#4a4351',
            display: 'block'
        }
    },
    content: {
        '& p': {
            fontSize: '15px',
            marginBottom: '15px'
        }
    },
    heading: {
        marginBottom: '15px !important'
    },
    Social: {
        width: '80%',
        margin: 'auto'
    },
    imgbox: {
        width: '100%',
        float: 'left',
        '& a': {
            width: '150px',
            margin: 'auto',
            borderRadius: ' 50%',
            overflow: 'hidden',
            height: '150px',
            marginBottom: ' 21px',
            '& img':{
                width:'100%',
                display:'block'
            }
        }
    }

})

const Author = () => {
    const classes = useStyles();
    return (
        <Box className={classes.Author}>
            <Box className={classes.imgbox}>
                <Link href="#">
                    <img src='/img/628877b52e5abaab27be848981cc348e.jpeg' alt="dd" />
                </Link>
            </Box>
            <Box className={classes.content}>
                <Typography variant='h3' className={classes.heading}><Link href="">Melisa Sawyer</Link></Typography>
                <Typography>
                    Odio facilisis mauris sit amet massa. Ac tincidunt vitae semper quis lectus nulla at. Eros donec ac odio tempor.
                </Typography>
                <Box className={classes.Social}>
                    <Social />
                </Box>
            </Box>
        </Box>
    )
}

export default Author
