import { Typography } from '@mui/material';
import React from 'react';

const Logo = () => {
  return (
    <div>
      <Typography
        variant="h3"
        noWrap
        component="a"
        href="/"
        sx={{
          marginLeft: '50px',
          marginRight: '30px',
          color: '#4a4351',
          cursor: 'pointer',
          fontWeight: '400',
          fontSize: '42px',
          fontFamily: 'Oswald, sans-serif',
          textTransform: 'uppercase',
          lineHeight: ' 100%',
          textDecoration: 'none',
        }}
      >
        Norway
      </Typography>
    </div>
  )
}

export default Logo
