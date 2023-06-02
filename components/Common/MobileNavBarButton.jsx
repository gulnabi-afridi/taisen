import React from 'react';
import AnchorLink from "@mui/material/Link";

const MobileNavBarButton = ({children,disabled,sx,...props}) => {
  return (
    <AnchorLink
      aria-disabled={disabled}
      className='NavLink' sx={{
      fontFamily: ['Poppins', 'sans - serif'],
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
      color: disabled ? '#8E8E8E' : 'rgba(255, 255, 255, 1)',
      mb: '18px',
      width: '100%',
      borderBottom: '1px solid white',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      cursor: 'pointer',
      px: 2,
      pb: 1,
      "&:hover": {color: disabled ? '#8E8E8E' : '#FBD005'},
      ...sx,
    }}
                 {...props}
    >{children}</AnchorLink>
  );
};

export default MobileNavBarButton;
