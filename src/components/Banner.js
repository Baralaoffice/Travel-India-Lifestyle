import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const useStyles = makeStyles({
    banner: {
        width: '100%',
        float: 'left',
    },
    main: {
        display: 'flex',
        margin: 'auto',
        color: ' #5a595c',
        '& a': {
            color: '#757575',
            textDecoration: 'none',
        }
    },
    row1: {
        display: 'block',
        width: '63%',
        paddingRight: '50px'
    },
    row2: {
        display: 'block',
        width: '37%',
    },
    col: {
        display: 'block',
        width: '100%',
        marginBottom: '30px',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            display: 'block',
            transition: 'all 1.5s ease-in-out',
        },
        '& img:hover': {
            width: '100%',
            display: 'block',
            transform: 'scale(1.5)',
        },
    },
    categoryname: {
        '& a': {
            fontWeight: 600,
            borderRadius: ' 4px',
            padding: ' 8px 15px',
            lineHeight: 1,
            color: '#fff',
            textDecoration: ' none',
            transition: ' all .25s ease -in -out',
            display: 'inline-block',
            fontSize: '14px !important',
            letterSpacing: ' 1px',
            textTransform: ' uppercase',
        }
    },
    title: {
        fontSize: '31px',
        marginBottom: '15px',
        fontWeight: 400,
        '& a': {
            transition: 'all .25s ease-in-out',
            color: ' #4a4351',
        },
        '& a:hover': {
            textDecoration: 'underline',
        }
    },
    postdate: {
        display: 'block',
        marginBottom: '15px',
        opacity: .85,
        lineHeight: '170%',
        fontSize: '14px',
        color: '#757575',
        '& a': {
            color: '#757575',
        }
    },
    summar: {
        "& p": {
            marginBottom: '15px',
            fontSize: '16px',
            lineHeight: '1.7'
        }
    },
    posticon: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '15px',

        '& span': {
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            "& a": {
                color: '#858585',
                marginRight: '5px',
                fontSize: '15px',

            }
        }
    },

})



const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Box className={classes.main}>
                <Box className={classes.row1}>
                    <Box className={classes.col}>
                        <Link href="#">
                            <img src="img/smiling-woman-in-jacket-3373398.jpg-optimized.jpg" alt='' />
                        </Link>
                    </Box>
                    <Box className={classes.col1}>
                        <Box className={classes.categoryname}>
                            <Link href="#" style={{ background: " #45b5aa", }}>Travel</Link>
                        </Box>
                        <h2 className={classes.title}><Link href="#">Molestie at elementum eu facilisis sed</Link></h2>
                        <Box className={classes.postdate}>
                            <Link href="">by Melisa Sawyer on September 05, 2022</Link>
                        </Box>
                        <Box className={classes.summar}>
                            <Typography>
                                Urna id volutpat lacus laoreet non curabitur gravida. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus metus aliquam eleifend mi in nulla posuere…
                            </Typography>
                        </Box>
                        <Box className={classes.posticon}>
                            <span><WatchLaterIcon />3 min read </span>
                            <span><VisibilityIcon />6,110 views </span>
                            <span><ChatBubbleIcon /><Link href="#">3 Comments</Link> </span>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.row2}>
                    <Box className={classes.item}>
                        <Box className={classes.col} style={{ height: " 220px", }}>
                            <img src="img/man-sitting-on-chair-reading-newspaper-2776911.webp" alt='aa' />
                        </Box>
                        <Box className={classes.col1}>
                            <Box className={classes.categoryname}>
                                <Link href="#" style={{ background: " #88b04b", }}>LIFESTYLE</Link>
                            </Box>
                            <h2 className={classes.title}><Link href="#" style={{ fontSize: " 19px", }}>Faucibus vitae praesent semper feugiat</Link></h2>
                            <Box className={classes.postdate}>
                                <Link href="">by Melisa Sawyer on September 05, 2022</Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.item}>
                        <Box className={classes.col} style={{ height: " 220px", }}>
                            <img src="img/photo-of-lighthouse-on-seaside-during-daytime-3099153.webp" alt='aa' />
                        </Box>
                        <Box className={classes.col1}>
                            <Box className={classes.categoryname}>
                                <Link href="#" style={{ background: " #ad5e99", }}>ARCHITECTURE</Link>
                            </Box>
                            <h2 className={classes.title}><Link href="#"  style={{ fontSize: " 19px", }}>Faucibus vitae praesent semper feugiat</Link></h2>
                            <Box className={classes.postdate}>
                                <Link href="">by Melisa Sawyer on September 05, 2022</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Banner
