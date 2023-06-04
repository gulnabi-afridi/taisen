import React from 'react';
import Topography from "@mui/material/Typography";

const ResponsiveHeading = ({children,sx,...props}) => {
  return (
    <Topography
      variant='h2' sx={{
      fontFamily: {
        xs: 'consolas',
        md: 'Franklin-Gothic-Heavy-Regular',
      },
      fontSize: {xs: '35px',md: '40', lg: '52px'},
      lineHeight: '60.84px',
      fontWeight: 700,
      color: '#FBFAF5',
      textTransform: 'unset', position: 'relative',
      // "&:before": {
      //   content: '""',
      //   height: '5px',
      //   width: '50px',
      //   position: 'absolute',
      //   bottom: '0px',
      //   right: '0px',
      //   background: 'white'
      // }
      ...sx,
    }}
      {...props}
    >
      {children}
    </Topography>
  );
};

export default ResponsiveHeading;
