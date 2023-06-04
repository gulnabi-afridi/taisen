import React from 'react';
import {Typography} from "@mui/material";

const ResponsiveParagraph = ({children,sx,...props}) => {
  return (
    <Typography
      variant={'h1'}
      sx={{
        textAlign: 'left',
        fontSize: {xs: '1rem', lg: '1.3rem'},
        mt: '1rem',
        fontFamily: 'consolas',
        color: '#FBFAF5',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default ResponsiveParagraph;
