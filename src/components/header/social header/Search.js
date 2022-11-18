import { IconButton } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div>
      <IconButton size="large" aria-label="search" color="inherit">
        <SearchIcon />
      </IconButton>
    </div>
  )
}

export default Search
