import * as React from 'react';
import Box from '@mui/material/Box';


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        }
      }}
    >
      <HomeIcon />
    </Box>
  );
}