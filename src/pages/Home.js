import React from 'react'
import Banner from '../components/Banner';
import { makeStyles } from '@mui/styles';
import Category from '../categories/Category';
import ContentBlog from '../blogs/ContentBlog';
import Pagination from '../components/pagination bar/Pagination';
import Stories from '../components/stories/Stories';
import { Box, Divider } from '@mui/material';


const useStyles = makeStyles({
  App:{
    paddingLeft:' 50px',
    paddingRight: '50px',
  }
})

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Banner/>
      <Category/>
      <ContentBlog/>
      <Pagination/>
      <Stories/>
      <Box style={{marginBottom:'50px'}}>
        <Divider />
      </Box>
    </div>
  )
}
export default Home
