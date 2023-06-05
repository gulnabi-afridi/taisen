import React from 'react';
import Box from '@mui/material/Box';
import s2Bg from '../../public/s2Bg.png'
import Image from 'next/image';

import ResponsiveHeading from "../Common/ResponsiveHeading";
import WithHeader from "../hoc/WithHeader";
import WithTristanBg from "../hoc/WithTristanBg";
import ResponsiveParagraph from "../Common/ResponsiveParagraph";
import ButtonBadge from "../Common/ButtonBadge";
import withLeftLine from "../hoc/WithLeftLine";

function PhantasyWorldSection() {
  return (
    <Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: {md: 'row', xs: 'column'},
      }}>

        {/* Left */}
        <Box
          sx={{
            width: {md: '50%', xs: '100%'},
            display: 'flex',
            // justifyContent: 'center',
            // justifyContent: 'center',
            pt: {xs: '0', md: '8rem'},
            alignItems: 'start',
            flexDirection: 'column',
          }}>
          <ResponsiveHeading sx={{
            fontSize: {xs: '45px', md: '52px', lg: '60px'},
            lineHeight: {xs: '50px', lg: '70px'},
            textAlign: 'left',
          }}>
            <Box component={'span'} sx={{color: '#701D1D'}}>Taisen</Box> is creating an entire phantasy world
            in the form of web3.
          </ResponsiveHeading>

          <ResponsiveParagraph sx={{mt: '2rem'}}>
            We have already said it. Taisen is the next LOTR, GOT, and HP
            The progress of this dream will have you on the edge of your
            seat, as well as the story itself
          </ResponsiveParagraph>

          {/*<ResponsiveParagraph sx={{mt: '2rem'}}>*/}
          {/*  To start, education yourself on the culture. <br/>*/}
          {/*  Check*/}
          {/*  <ButtonBadge sx={{*/}
          {/*    ml: '8px'*/}
          {/*  }}>*/}
          {/*    Lore*/}
          {/*  </ButtonBadge>*/}
          {/*</ResponsiveParagraph>*/}


          {/*<Box sx={{ mt: 6 }} >*/}
          {/*  <CustomizedButton Text={'Click me'} Grad_1={'#593A97'} Grad_1_per={'-21.74%'} Grad_2={'#A9D4F4'} Grad_2__per={'111.27%'} deg={'93.64deg'} color={'rgba(2, 2, 2, 1)'} />*/}
          {/*</Box>*/}
        </Box>

        {/* Right */}
        <Box sx={{width: {md: '50%', xs: '100%'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box>
            <Image src={s2Bg} alt={'Section 2'}/>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default WithTristanBg(withLeftLine(PhantasyWorldSection,3), '#596B75');
