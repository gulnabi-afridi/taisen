import React, {useState} from 'react';
import Box from '@mui/material/Box';

import ResponsiveHeading from "../Common/ResponsiveHeading";
import WithHeader from "../hoc/WithHeader";
import WithTristanBg from "../hoc/WithTristanBg";
import ResponsiveParagraph from "../Common/ResponsiveParagraph";
import ButtonBadge from "../Common/ButtonBadge";
import {Typography} from "@mui/material";
import GrayAndRedBox from "../Common/GrayAndRedBox";
import withLeftLine from "../hoc/WithLeftLine";
import {Swiper, SwiperSlide} from "swiper/react";
// import required modules
import {Navigation} from "swiper";
import {Controller} from 'swiper';
import {firstBillboardData, secondBillboardData, thirdBillboardData} from "../../data/billboardData";


function BillBoardSection() {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [billboardText,setBillboardText] = useState('Conquered');

  const getBillboardText = () => {
      if (!controlledSwiper) return 'Conquered';

      switch (controlledSwiper.activeIndex) {
        case 0: return 'Conquered';
        case 1: return  'Fighting';
        case 2: return 'Next Rival';
      }
  }

  const slideChangeHandler = () => {
    setBillboardText(getBillboardText());
  }


  return (
    <>

      <Box
        sx={{
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
        }}
      >

        {/* Left */}
        <Box sx={{
          // gridColumn: '1/3',
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
            Taisen Info Billboard
          </ResponsiveHeading>

          <ResponsiveParagraph
            sx={{
              mt: {xs: '2rem', md: '3rem'},
              lineHeight: '30px',
            }}
          >
            We keep you informed about everything <br/>
            What has happened <br/>
            What is happening <br/>
            What will happen <br/>
          </ResponsiveParagraph>

          {/*<ButtonBadge*/}
          {/*  variant={'red'}*/}
          {/*  sx={{*/}
          {/*    mt: {xs: '2rem', md: '3rem'}*/}
          {/*  }}*/}
          {/*>*/}
          {/*  billboard*/}
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
              {billboardText}
            </Typography>

            <Box sx={{
              display: 'grid',
            }}>


              <Swiper
                spaceBetween={30}
                navigation={true}
                modules={[Navigation, Controller]}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                onSwiper={setControlledSwiper}
                onSlideChange={slideChangeHandler}
              >
                <SwiperSlide style={{
                  width: '100%',
                  display: 'block',
                  minHeight: 'unset',
                }}>
                  <Box sx={{
                    mt: '1.5rem',
                    display: 'grid',
                    gridGap: '4px',
                  }}>
                    {firstBillboardData.map((text,index) => (
                      <GrayAndRedBox label={index  + 1} key={index} text={text}/>
                    ))}

                  </Box>
                </SwiperSlide>

                <SwiperSlide style={{
                  width: '100%',
                  display: 'block',
                  minHeight: 'unset',
                }}>
                  <Box sx={{
                    mt: '1.5rem',
                    display: 'grid',
                    gridGap: '4px',
                  }}>
                    {secondBillboardData.map((text,index) => (
                      <GrayAndRedBox label={index + 1} key={index} text={text}/>
                    ))}
                  </Box>
                </SwiperSlide>

                <SwiperSlide style={{
                  width: '100%',
                  display: 'block',
                  minHeight: 'unset',
                }}>
                  <Box sx={{
                    mt: '1.5rem',
                    display: 'grid',
                    gridGap: '4px',
                  }}>
                    {thirdBillboardData.map((text,index) => (
                      <GrayAndRedBox label={index + 1} key={index} text={text}/>
                    ))}
                  </Box>
                </SwiperSlide>

              </Swiper>
            </Box>
            <Box sx={{
              mt: '2rem',
            }}>
              <Typography sx={{
                fontFamily: 'consolas',
                fontSize: '22px',
              }} variant={'body1'}>
                You will know about every dance <br/>
                of the swords in <Box component={'span'} sx={{color: '#701D1D'}}>Taisen</Box>
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

export default WithTristanBg(withLeftLine(BillBoardSection, 4), '#778F99');
