import React from 'react';
import Box from '@mui/material/Box';

import ResponsiveHeading from "../Common/ResponsiveHeading";
import WithHeader from "../hoc/WithHeader";
import WithTristanBg from "../hoc/WithTristanBg";
import ResponsiveParagraph from "../Common/ResponsiveParagraph";
import ButtonBadge from "../Common/ButtonBadge";
import {Typography} from "@mui/material";
import TeamCard from "../Common/TeamCard";
import {teamData} from "../../data/teamData";
import withLeftLine from "../hoc/WithLeftLine";

function TeamSection() {
  return (
    <>

      <Box sx={{
        display: 'grid',
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // flexDirection: {md: 'row', xs: 'column'}
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
        },
        gridGap: '1rem',
      }}>

        {/* Left */}
        <Box sx={{
          // width: {md: '50%', xs: '100%'},
          display: 'flex',
          pt: {xs: '0', md: '8rem'},
          // justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
        }}>
          <ResponsiveHeading sx={{
            fontSize: '65px',
            lineHeight: '70px',
          }}>
            Team Taisen
          </ResponsiveHeading>

          <ResponsiveParagraph sx={{mt: '3rem'}}>
            Taisen’s vision is to be the best, so we have gathered the best experts from all around the world to
            guarantee the vision
          </ResponsiveParagraph>

          {/*<ButtonBadge variant={'red'} sx={{mt: '3rem'}}>*/}
          {/*  team*/}
          {/*</ButtonBadge>*/}

          {/*<Box sx={{ mt: 6 }} >*/}
          {/*  <CustomizedButton Text={'Click me'} Grad_1={'#593A97'} Grad_1_per={'-21.74%'} Grad_2={'#A9D4F4'} Grad_2__per={'111.27%'} deg={'93.64deg'} color={'rgba(2, 2, 2, 1)'} />*/}
          {/*</Box>*/}
        </Box>

        {/* Right */}
        <Box sx={{
          // width: {md: '50%', xs: '100%'},
          height: '100%',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        }}
        >

          <Box sx={{
            height: '100%',
            backgroundColor: 'rgba(151,162,165,0.76)',
            px: '1rem',
            py: '2rem',
          }}>
            <Typography sx={{
              fontSize: {
                xs: '2.5rem',
                md: '4rem'
              },
              ml: '8px',
              fontFamily: 'consolas',
              textTransform: 'uppercase',
            }} variant={'h1'}>
              Team
            </Typography>

            <Box sx={{
              mt: '1.5rem',
              display: 'grid',
              gridGap: '12px',
              height: '600px',
              overflowY: 'scroll',
              scrollbarColor: 'red blue',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              // '&::-webkit-scrollbar-track': {
              //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              // },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#778F99',
                borderRadius: '6px',
                // outline: '1px solid slategrey'
              }
              // #0E0E0E
            }}>

              {/*     Team Cards    */}
              {teamData.map(({id, name, role, imgSrc,twitterUrl}) => (
                <TeamCard
                  key={id}
                  heading={name}
                  subHeading={role}
                  imgSrc={imgSrc}
                  twitterUrl={twitterUrl}
                />
              ))}

            </Box>

            <Box sx={{
              mt: '2rem',
            }}>
              <Typography sx={{
                fontFamily: 'consolas',
                fontSize: '22px',
              }} variant={'body1'}>
                A team that is tireless in serving
                the community.
              </Typography>
            </Box>

          </Box>

          {/*<Box>*/}
          {/*  <Image src={s2Bg} alt={'Section 2'} />*/}
          {/*</Box>*/}
        </Box>
      </Box>

    </>
  )
}

export default WithTristanBg(withLeftLine(TeamSection,5), '#8B9FA5');
