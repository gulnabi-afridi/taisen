import React from 'react';
import {Container} from "@mui/material";
import TristanBg from "../../public/tristan-bg.png";
import Image from "next/image";
import Box from "@mui/material/Box";

const WithTristanBg = (WrapperComponent, bgColor) => function WithTristanBgComponent() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: bgColor || '#47555E',
      py: {xs: '5rem', md: '5rem', lg: '8rem'},
      mt: '-4px',
      position: 'relative',
    }}>
        <Image priority={true} layout={'fill'} objectFit={'contain'} src={TristanBg} alt={'Tristann Background'}/>
      <Box sx={{
        position: 'relative',
      }}>
        <Container maxWidth="big" sx={{
          position: 'relative',
          zIndex: 5,
        }}>
          <WrapperComponent/>
        </Container>
      </Box>
    </Box>
  );
}


export default WithTristanBg;
