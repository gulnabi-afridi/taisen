import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {Container, Typography} from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import HeroBg from '../../public/assets/bg.jpg';
import MobileHeroBg from '../../public/wallpaper.jpg';
import {useMedia} from 'react-use';

function Hero() {

  const isWide = useMedia('(min-width: 600px)');

  return (
    <Box sx={{width: '100%',flex: 1}}>
      <Box sx={{
        '& > span': {
          width: '100% !important',
        },
        display: 'block',
        paddingTop: '10rem',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
      }}>

        <Image src={isWide ? HeroBg : MobileHeroBg} layout={'fill'} objectPosition={'center'} objectFit={'cover'} alt={'Background Cover'}/>

        <Container
          maxWidth="big"
          sx={{
            position: 'relative',
            width: '100%',
            color: '#fff',
            height: '100%',
          }}
        >
          <Typography
            variant={'h1'}
            sx={{
              textAlign: 'left',
              fontSize: {xs: '45px', lg: '52px'},
              fontFamily: 'Franklin-Gothic-Heavy-Regular',
            }}
          >
            WELCOME
          </Typography>
          <Typography
            variant={'h1'}
            sx={{
              fontFamily: 'Franklin-Gothic-Heavy-Regular',
              textAlign: 'left',
              fontSize: {xs: '45px', lg: '52px'},
              mt: '1rem',
            }}
          >
            TO THE REALM OF {" "}
            <Box component={'span'} sx={{color: '#701D1D'}}>
              TAISEN
            </Box>
          </Typography>
          <Typography
            variant={'h1'}
            sx={{
              textAlign: 'left',
              fontSize: {xs: '1rem', lg: '1.5rem'},
              mt: '1rem',
              fontFamily: 'consolas',
            }}
          >
            A MULTIFUNCTIONAL WEB3 BRAND
          </Typography>

        </Container>


      </Box>
      {/*<Box id={"Hero"} sx={{*/}
      {/*  width: '100%',*/}
      {/*  height: {md: '110vh', xs: '100vh'},*/}
      {/*  display: 'flex',*/}
      {/*  justifyContent: 'center',*/}
      {/*  alignItems: 'center',*/}
      {/*  position: 'relative',*/}
      {/*  mt: '-80px'*/}
      {/*}}>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      width: '100%',*/}
      {/*      height: '160px',*/}
      {/*      backgroundImage: 'linear-gradient(180deg, rgba(22, 2, 31, 0) 0%, rgba(22, 2, 31, 0) 25.52%, rgba(22, 2, 31, 0.61) 62.5%, rgba(22, 2, 31, 0.92) 83.33%, #16021F 100%)',*/}
      {/*      position: 'absolute',*/}
      {/*      bottom: '0px',*/}
      {/*      left: '0px',*/}
      {/*      right: '0px'*/}
      {/*    }}>*/}

      {/*  </Box>*/}
      {/*</Box>*/}
    </Box>
  )
}

export default Hero
