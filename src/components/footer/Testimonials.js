import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';



const useStyles = makeStyles({
    Testimonials: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: ' space-between'
    },
    Avatarimg: {
        width: '150px !important',
        height: '150px !important'
    },
    text: {
        flex: '1 1 50%',
        marginLeft: '25px',
        marginRight: '25px',
        fontSize: ' 18px',
        color: '#5a595c',
        textAlign: 'left',
        '& p': {
            fontSize: '18px',
        },
        '& a ': {
            fontSize: '24px',
            color: '#5a595c',
            marginBottom: '20px',
            textDecoration: ' none',
        }
    },
    col: {
        display: 'flex',
        flex: '49%',
        marginBottom: '50px',
        '&:last-child': {
            flexDirection: 'row-reverse',
        }
    },
    social: {
        display: 'flex',
        justifyContent: 'space-between',
        width:'200px',
        marginTop: '15px',
        '& a': {
          minWidth: 'auto !important',
        },
      },
      Twitter: {
        color: '#1da1f2 !important',
      },
      Instagram: {
        color: '#e1306c !important'
      },
      WhatsApp: {
        color: '#1ed760 !important'
      },
      Pinterest: {
        color: '#bd081c !important'
      },
     
});

const Testimonials = () => {
    const data = [
        {
            "id": '1',
            "image": '/img/6ea297c3e2548993313fcd2a5229a510.jpeg',
            "title": 'Matt Woods',
            "body": 'I m a bestselling author who has been roaming the world for over a decade. Let me help you plan your trip of a lifetime!'
        },
        {
            "id": '1',
            "image": '/img/548884ed61f41be8d025be14fe18a336.jpeg',
            "title": 'Matt Woods',
            "body": 'I m a bestselling author who has been roaming the world for over a decade. Let me help you plan your trip of a lifetime!'


        }
    ]


    const classes = useStyles()
    return (
        <Box className={classes.Testimonials}>
            {
                data.map((item, id) => (
                    <Box key={id} className={classes.col}>
                        <Box>
                            <Avatar className={classes.Avatarimg}>
                                <Link href="">
                                    <img src={item.image} alt="aa" className="fluid" />
                                </Link>
                            </Avatar>
                        </Box>
                        <Box className={classes.text}>
                            <Typography variant='h3'><Link href="#">{item.title}</Link></Typography>
                            <Typography>{item.body}</Typography>
                            <Box className={classes.social}>
                                <Button href="https://twitter.com/login" className={classes.Twitter}>
                                    <TwitterIcon />
                                </Button>
                                <Button href="https://www.instagram.com" className={classes.Instagram}>
                                    <InstagramIcon />
                                </Button>
                                <Button href="https://www.youtube.com" className={classes.WhatsApp}>
                                    <WhatsAppIcon />
                                </Button>
                                <Button href="https://www.linkedin.com" className={classes.Twitter}>
                                    <LinkedInIcon />
                                </Button>
                                <Button href="https://web.whatsapp.com" className={classes.Pinterest}>
                                    <PinterestIcon />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}
export default Testimonials
