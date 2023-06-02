import React from 'react';
import AnchorLink from "@mui/material/Link";

const NavbarBtn = ({children,isActive,disabled,sx,...props}) => {
  return (
    <AnchorLink
      className='NavLink'
      aria-disabled={disabled}
      sx={{
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 600,
        color: disabled ? '#8E8E8E' : 'rgba(255, 255, 255, 1)',
        borderBottom: isActive ? `1px solid #701d1d` : '',
        // mr: '30px',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        cursor: 'pointer',
        "&:hover": {color: disabled ? '#8E8E8E' : '#FBD005'},
        ...sx,
      }}
      {...props}
    >
      {children}
    </AnchorLink>
  );
};

export default NavbarBtn;
