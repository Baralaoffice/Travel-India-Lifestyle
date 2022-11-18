import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

const useStyles = makeStyles({
  item: {
    margin: '0 10px !important',
    position: 'relative !important',
    padding: '30px 20px !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    fontSize: ' 14px !important',
    textTransform: 'uppercase',
    letterSpacing: '2px !important',
    fontWeight: '600 !important',
    fontFamily: "Lato,sans-serif !important",
    color: '#4a4351 !important',
    "&.active": {
      color:'#f0c05a',
    },
  }
});

const pages = ['HEADER', 'FEATURED', 'BLOG FEED'];

const ThemeNav = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {pages.map((page) => (
          <Link
            href="/"
            underline="none"
            key={page}
            className={classes.item}
          >
            {page}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default ThemeNav;
