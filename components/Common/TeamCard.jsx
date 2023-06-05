import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Image from "next/image";
import {useMedia} from "react-use";
import AnchorLink from "@mui/material/Link";
import {socials} from "../../data/socials";

const TeamCard = ({heading, subHeading, imgSrc, twitterUrl}) => {
  const isWide = useMedia('(min-width: 600px)');

  return (
    <Box sx={{
      background: '#701D1D',
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'space-between',
    }}>

      {/*     Team Card Heading Part    */}
      <Box sx={{
        py: "1.5rem",
        px: '1rem',
        display: 'grid',
        gridTemplateRows: "1fr auto",
      }}>
        <div>
          <Typography variant={'h1'} sx={{
            fontFamily: 'consolas',
            fontSize: {xs: '20px', sm: '24px', md: '32px'},
            color: '#fff',
          }}>
            {heading}
          </Typography>
          <Typography variant={'h2'} sx={{
            fontFamily: 'consolas',
            fontSize: {xs: '14px', sm: "16", md: '24px'},
            color: '#fff',
          }}>
            {subHeading}
          </Typography>
        </div>
        <div>
          <AnchorLink target={'_blank'} href={twitterUrl}
                      sx={{display: 'flex', alignItems: 'center',}}>
            <Image src={'/SVG/twitter.svg'} width={21} height={18} objectFit={'contain'}/>
          </AnchorLink>
        </div>
      </Box>

      <Box sx={{
        flexShrink: 0,
        display: 'flex',
        // width: isWide ? 180 : 100,
        // height: isWide ? 180 : 100,
        // position: 'relative',
      }}>
        <Image src={imgSrc} width={170} height={170} alt={'Team Member'}/>
      </Box>

    </Box>
  );
};

export default TeamCard;
