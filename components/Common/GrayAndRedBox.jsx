import React from 'react';
import Box from "@mui/material/Box";

const GrayAndRedBox = ({label,text}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '70px 1fr',
        gridGap: '8px',
      }}
    >
      <Box sx={{
        background: '#701D1D',
        py: '1.5rem',
        borderRadius: '4px',
        minHeight: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.5rem',
      }}>
        {label}
      </Box>
      <Box sx={{
        background: 'rgba(110,117,119,0.76) ',
        py: '8px',
        fontWeight: 'normal',
        fontFamily: 'consolas',
        fontSize: '1rem',
        borderRadius: '4px',
      }}>
        {text}
      </Box>
    </Box>
  );
};

export default GrayAndRedBox;
