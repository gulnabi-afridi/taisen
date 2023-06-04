import React from 'react';
import Button from "@mui/material/Button";

const ButtonBadge = ({children,variant, sx, ...props}) => {
  return (
    <Button
      sx={{
        fontFamily: 'consolas',
        py: '2px',
        background: variant === "red" ? '#701D1D' : `rgba(255, 255, 255, .25)`,
        color: '#fff',
        '&:hover': {
          background: variant === "red" ? '#5d1919' : `rgba(255, 255, 255, .35)`,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonBadge;
