import { Divider, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { makeStyles } from '@mui/styles';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Storie from '../../api/Stories.json'

const useStyles = makeStyles({
    Stories: {
        width: '100%',
        float: 'left',
        '& a': {
            color: '#757575',
            textDecoration: 'none',
            transition: ' all .25s ease -in -out',
        }
    },
    titleh: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        '& hr': {
            width: '40%'
        },
        '& h3': {
            fontSize: '20px', 
            margin: '0 30px'
        }
    },
    row:{
        display: 'flex',
        width: '100%',
        gap:'50px'
    },
    row1: {
        display: 'block',
        width: '100%',
    },
    col: {
        display: 'block',
        width: '100%',
        marginBottom: '30px',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '500px',
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

const Stories = () => {
    const classes = useStyles();
    return (
        <Box className={classes.Stories}>
            <Box className={classes.titleh}>
                <Divider />
                <Typography variant='h3'>More stories</Typography>
                <Divider />
            </Box>
            <Box className={classes.row}>
                {
                    Storie.map((item, id) => (
                        <Box key={id} className={classes.row1}>
                            <Box className={classes.col}>
                                <Link href="#">
                                    <img src={item.image} alt='' />
                                </Link>
                            </Box>
                            <Box className={classes.col1}>
                                <Box className={classes.categoryname}>
                                    <Link href="#" style={{ background: " #45b5aa", }}>{item.button}</Link>
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
                                    <span><WatchLaterIcon />{item.iconcon.Watch}</span>
                                    <span><VisibilityIcon />{item.iconcon.Visibility}</span>
                                    <span><ChatBubbleIcon /><Link href="#">{item.iconcon.Chat}</Link> </span>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>

        </Box>
    )
}

export default Stories
