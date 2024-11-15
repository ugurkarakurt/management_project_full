import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import top100Films from './top100Films';

export default function Tags() {
  const renderTags = (value: any[], getTagProps: any) => {
    return value.map((option: any, index: number) => {
      const { key, ...tagProps } = getTagProps({ index });
      return (
        <Chip
          key={key}
          label={typeof option === 'string' ? option : option.title}
          {...tagProps}
        />
      );
    });
  };

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      {/* Standard version */}
      <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        renderTags={renderTags}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />

      {/* Filtered version */}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderTags={renderTags}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />

      {/* Free solo version */}
      <Autocomplete
        multiple
        id="tags-filled"
        options={top100Films.map((option) => option.title)}
        defaultValue={[top100Films[13].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                variant="outlined"
                label={option}
                {...tagProps}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-readOnly"
        options={top100Films.map((option) => option.title)}
        defaultValue={[top100Films[12].title, top100Films[13].title]}
        readOnly
        renderTags={renderTags}
        renderInput={(params) => (
          <TextField {...params} label="readOnly" placeholder="Favorites" />
        )}
      />
    </Stack>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

