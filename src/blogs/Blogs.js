import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Databash from '../api/Databash.json'

const useStyles = makeStyles({
    blogpost: {
        width: '100%',
        gap: '50px',
        columnCount:'2',
        '& a': {
            transition: 'all .25s ease-in-out',
            color: ' #4a4351',
            textDecoration: 'none',
        },
    },
    blogitem: {
        width: '380px',
        overflow: 'hidden',
        marginBottom: '40px',
    },
    categoryname: {
        '& a': {
            fontWeight: 600,
            borderRadius: '4px',
            padding: '8px 15px',
            lineHeight: 1,
            color: '#fff',
            display: 'inline-block',
            fontSize: '14px !important',
            letterSpacing: '1px',
            textTransform: 'uppercase',
        },
    },
    title: {
        fontSize: '25px',
        marginBottom: '15px',
        fontWeight: 400,
        '& a': {
            color: '#4a4351',
        },
        '& a:hover': {
            textDecoration: 'underline',
        },
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
        },
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
            alignItems: 'center',
        }
    },
    blogimg: {
        width: '100%',
        marginBottom: '20px',
        '& a': {
            display: 'block',
            '& img': {
                width: '100%'
            }
        }
    },
    // outline: {
    //     outlineOffset: '-15px',
    //     outline: '1px solid white',
    //     transition: 'all .25s ease-in-out',
    //     ' &:hover': {
    //         outlineOffset: '-20px',
    //     },
    // },
    iconbtn: {
        fontSize: '14px',
        color: '#858585',
        marginRight: '5px',
        '& svg': {
            fontSize: '14px',
        },
    },
});

const Blogs = () => {
    const classes = useStyles();
    return (
        <Box className={classes.blogpost}>
            {
                Databash.map((item, id) => (
                    <Box className={classes.postitem}>
                        <Box className={classes.blogitem}>
                            <Box className={classes.blogimg}>
                                <Link href="#">
                                    <img src={item.image} alt='sc' />
                                </Link>
                            </Box>
                            <Box className={classes.blogconten}>
                                <Box className={classes.categoryname}>
                                    <Link href="#" style={{ background: " #ad5e99", }}>{item.button}</Link>
                                </Box>
                                <h2 className={classes.title}><Link href="#">{item.title}</Link></h2>
                                <Box className={classes.postdate}>
                                    <Link href="">{item.dete}</Link>
                                </Box>
                                <Box className={classes.summar}>
                                    <Typography>
                                        {item.body}
                                    </Typography>
                                </Box>
                                <Box className={classes.posticon}>
                                    <span><span className={classes.iconbtn}><WatchLaterIcon /></span>{item.iconcon.Watch} </span>
                                    <span><span className={classes.iconbtn}><VisibilityIcon /></span>{item.iconcon.Visibility}</span>
                                    <span><span className={classes.iconbtn}><ChatBubbleIcon /></span>{item.iconcon.Chat}</span>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Blogs
