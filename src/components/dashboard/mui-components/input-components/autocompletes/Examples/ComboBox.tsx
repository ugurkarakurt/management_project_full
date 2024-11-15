import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';

const ComboBox = () => {
  return (
    <Autocomplete
      disablePortal
      id="movie-search-box"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Movie"
          placeholder="Search for a movie..."
        />
      )}
    />
  );
};

export default ComboBox;