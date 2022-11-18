import React from 'react';
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ModeNightSharpIcon from '@mui/icons-material/ModeNightSharp';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  social: {
    display: 'flex',
    justifyContent: 'space-between',
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
  YouTube: {
    color: '#ff0000 !important'
  },
  Telegram: {
    color: '#1da1f2 !important'
  },
  WhatsApp: {
    color: '#1ed760 !important'
  },
  night: {
    color: '#000 !important'
  },
});

const Social = () => {
  const classes = useStyles()
  return (
    <div className={classes.social}>
      <Button href="https://twitter.com/login" className={classes.Twitter}>
        <TwitterIcon />
      </Button>
      <Button href="https://www.instagram.com" className={classes.Instagram}>
        <InstagramIcon />
      </Button>
      <Button href="https://www.youtube.com" className={classes.YouTube}>
        <YouTubeIcon />
      </Button>
      <Button href="https://www.linkedin.com" className={classes.Telegram}>
        <LinkedInIcon />
      </Button>
      <Button href="https://web.whatsapp.com" className={classes.WhatsApp}>
        <WhatsAppIcon />
      </Button>
      <Button href="#" className={classes.night}>
        <ModeNightSharpIcon />
      </Button>
    </div>
  )
}

export default Social
