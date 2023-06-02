import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {Container} from '@mui/material';
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {useRouter} from 'next/router';

// Assets imports
import Logo from "../../public/assets/SVG Icons/LOGO.svg";
import Discord from "../../public/assets/SVG Icons/discord.svg";
import Instagam from "../../public/assets/SVG Icons/instagam.svg";
import Twitter from "../../public/assets/SVG Icons/twitter.svg";
import NavbarBtn from "../Common/NavbarBtn";
import MobileNavBarButton from "../Common/MobileNavBarButton";
// import {socials} from "../../data/socials";

function Appbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Container maxWidth="big" sx={{}}>
      <Container maxWidth={'big'} sx={{
        width: '100%',
        height: '80px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundImage: router.pathname === '/' || router.pathname === '/gallery'
        //   ? 'linear-gradient(rgba(22,2,31,1), rgba(22,2,31,0.05))'
        //   : 'linear-gradient(rgba(22,2,31,1), rgba(22,2,31,1))',
        // position: 'absolute',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '999',
        padding: '25px',
        paddingTop: '35px',
      }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

          {/* Logo Here */}
          <Link href="/">
            <AnchorLink sx={{cursor: 'pointer'}}>
              <Image src={'/logo.png'} width={110} height={33} objectFit={'contain'}/>
            </AnchorLink>
          </Link>

          {/* Nav Menu */}
          <Box sx={{
            display: {
              md: 'flex',
              xs: 'none'
            },
            gridGap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.13)',
            backdropFilter: 'blur(5px)',
            py: "4px",
            px: '8px',
            borderRadius: '8px',
          }}>
            <Link href="/">
              <NavbarBtn isActive={router.pathname === '/'}>
                Home
              </NavbarBtn>
            </Link>
            {/*<Link href="/gallery">*/}
              <NavbarBtn disabled={true}>
                Gallery
              </NavbarBtn>
            {/*</Link>*/}
            {/*<Link href="">*/}
              <NavbarBtn disabled>
                Lore
              </NavbarBtn>
            {/*</Link>*/}
            <Link href="/whitepaper">
              <NavbarBtn isActive={router.pathname === '/whitepaper'}>
                Whitepaper
              </NavbarBtn>
            </Link>
            <Link href="/roadmap">
              <NavbarBtn isActive={router.pathname === '/roadmap'}>
                Roadmap
              </NavbarBtn>
            </Link>
            {/*<Link href="">*/}
              <NavbarBtn disabled>
                Verify
              </NavbarBtn>
            {/*</Link>*/}
            {/*<Link href="">*/}
              <NavbarBtn disabled>
                Mint
              </NavbarBtn>
            {/*</Link>*/}
            {/*<Link href="">*/}
              <NavbarBtn disabled>
                Staking
              </NavbarBtn>
            {/*</Link>*/}
            {/*<Link href="">*/}
              <NavbarBtn disabled={true}>
                Onlineshop
              </NavbarBtn>
            {/*</Link>*/}
            <AnchorLink href={'#'} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={'/SVG/opensea.svg'} width={23} height={21} objectFit={'contain'}/>
            </AnchorLink>
            <AnchorLink target={'_blank'} href={socials.twitter} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={'/SVG/twitter.svg'} width={21} height={18} objectFit={'contain'}/>
            </AnchorLink>
            <AnchorLink target={'_blank'} href={socials.discord} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={'/SVG/discord.svg'} width={23} height={17} objectFit={'contain'}/>
            </AnchorLink>
            {/*<AnchorLink href={'#'} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>*/}
            {/*  <Image src={'/SVG/instagram.svg'} width={20} height={20} objectFit={'contain'}/>*/}
            {/*</AnchorLink>*/}
          </Box>

          {/* Social Links */}
          {/*<Box sx={{display: {md: 'flex', xs: 'none'}, justifyContent: 'center', alignItems: 'center'}}>*/}
          {/*  <AnchorLink href={'#'} sx={{mr: 2}}>*/}
          {/*    <Image src={Discord} width={35} height={36} objectFit={'contain'}/>*/}
          {/*  </AnchorLink>*/}
          {/*  <AnchorLink href={'#'} sx={{mr: 2}}>*/}
          {/*    <Image src={Instagam} width={35} height={36} objectFit={'contain'}/>*/}
          {/*  </AnchorLink>*/}
          {/*  <AnchorLink href={'#'} sx={{mr: 2}}>*/}
          {/*    <Image src={Twitter} width={35} height={36} objectFit={'contain'}/>*/}
          {/*  </AnchorLink>*/}
          {/*</Box>*/}

          {/* Hamburgar */}
          {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
            color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
              md: 'none'
            }
          }}/> : < MenuIcon onClick={toggleDrawer} sx={{
            display: {
              md: 'none'
            }, color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
          }}/>}
        </Box>

        {/* Drawer */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='drawer'
          style={{width: '70%'}}
        >
          <Box component={'div'} sx={{
            width: '100%',
            height: '100vh',
            display: "flex",
            justifyContent: 'start',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'black',
            pt: 2
          }}>
            {/* Logo Here */}
            <Box>
              <Image src={'/logo motion website.gif'} width={120} height={80} objectFit={'contain'}/>
            </Box>

            {/* Nav Menu */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              mt: 4
            }}>
              <Link href="/">
                <MobileNavBarButton onClick={toggleDrawer}>
                  Home
                </MobileNavBarButton>
              </Link>
              {/*<Link href="/">*/}
                <MobileNavBarButton onClick={toggleDrawer} disabled>
                  Gallery
                </MobileNavBarButton>
              {/*</Link>*/}
              {/*<Link href="/">*/}
                <MobileNavBarButton onClick={toggleDrawer} disabled>
                  Lore
                </MobileNavBarButton>
              {/*</Link>*/}
              <Link href="/whitepaper">
                <MobileNavBarButton onClick={toggleDrawer}>
                  Whitepaper
                </MobileNavBarButton>
              </Link>
              <Link href="/roadmap">
                <MobileNavBarButton onClick={toggleDrawer}>
                  Roadmap
                </MobileNavBarButton>
              </Link>
              {/*<Link href="/">*/}
                <MobileNavBarButton onClick={toggleDrawer} disabled>
                  Verify
                </MobileNavBarButton>
              {/*</Link>*/}
              {/*<Link href="/">*/}
                <MobileNavBarButton onClick={toggleDrawer} disabled>
                  Mint
                </MobileNavBarButton>
              {/*</Link>*/}
              {/*<Link href="/">*/}
                <MobileNavBarButton onClick={toggleDrawer} disabled>
                  Staking
                </MobileNavBarButton>
              {/*</Link>*/}
              {/*<Link href="/">*/}
                <MobileNavBarButton onClick={toggleDrawer} disabled>
                  Onlineshop
                </MobileNavBarButton>
              {/*</Link>*/}

              {/* Social Links */}
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4}}>
                <AnchorLink href={'#'} sx={{mr: 2}}>
                  <Image src={'/SVG/opensea.svg'} width={35} height={35} objectFit={'contain'}/>
                </AnchorLink>
                <AnchorLink target={'_blank'} href={socials.discord ?? '#'} sx={{mr: 2}}>
                  <Image src={Discord} width={35} height={36} objectFit={'contain'}/>
                </AnchorLink>
                {/*<AnchorLink target={'_blank'} href={socials.instagram ?? '#'} sx={{mr: 2}}>*/}
                {/*  <Image src={Instagam} width={35} height={36} objectFit={'contain'}/>*/}
                {/*</AnchorLink>*/}
                <AnchorLink target={'_blank'} href={socials.twitter ?? '#'} sx={{mr: 2}}>
                  <Image src={Twitter} width={35} height={36} objectFit={'contain'}/>
                </AnchorLink>
              </Box>

            </Box>
          </Box>
        </Drawer>
      </Container>
    </Container>)
}

export default Appbar
