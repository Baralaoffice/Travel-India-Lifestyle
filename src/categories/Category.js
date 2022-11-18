import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';


const useStyles = makeStyles({
  category: {
    width: '100%',
    display: 'block',
    fontSize: ' 18px',
    float: 'left',
    fontWeight: 400,
    borderBottom: '1px solid #f1f1f1',
    marginBottom:' 50px',
    paddingBottom: '50px'
  },
  row:{
    display: 'flex',
    gap:'30px',
  },
  title: {
    letterSpacing: '2px',
    display: 'block',
    alignItems: 'center',
    position: 'relative',
    color: '#4a4351',
    fontSize: '18px',
    fontWeight: 400,
    marginBottom: '25px',
    "&:before, &:after": {
      content: "''",
      height: ' 1px',
      width: ' 40%',
      background: '#f1f1f1',
      position: 'absolute',
      top: '13px',
    },
    "&:after": {
      right: 0,
    },
    "&:before": {
      left: 0,
    }
  },
  catelink: {
    transition: 'all .25s ease-in-out',
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'relative',
    "& p": {
      position: 'absolute',
      transition: 'all .25s ease-in-out',
      
      top: '50%',
      left: ' 50%',
      transform: 'translate(-50%,-50%)',
      padding: '12px 25px',
      borderRadius: '4px',
      color: '#fff',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontWeight: 500,
    }
  },
  img: {
    width: '100%',
    height: '250px',
    '& img': {
      width: '100%',
      height: '100%',
      display:'block'
    }
  }


})

const Category = () => {
  const classes = useStyles();
  return (
    <Box className={classes.category}>
      <h3 className={classes.title}>Featured Categories</h3>
      <Box className={classes.row}>
      <Link href="#" className={classes.catelink}>
          <Box className={classes.img}>
            <img src="img/close-up-photography-of-woman-sitting-beside-table-while-3178818.jpg-optimized-683x1024.webp" alt='aa' />
          </Box>
          <Typography style={{background: '#88b04b',}}>Lifestyle</Typography>
        </Link>
        <Link href="#" className={classes.catelink}>
          <Box className={classes.img}>
            <img src="img/white-and-green-high-rise-building-3526084.jpg-optimized-scaled.webp" alt='aa' />
          </Box>
          <Typography style={{background: '#ad5e99',}}>Architecture</Typography>
        </Link>
        <Link href="#" className={classes.catelink}>
          <Box className={classes.img}>
            <img src="img/smartphone-beside-watch-and-camera-3243090.jpg-optimized.webp" alt='aa' />
          </Box>
          <Typography style={{background: '#45b5aa',}}>Travel</Typography>
        </Link>
        
      </Box>
    </Box>
  )
}

export default Category
