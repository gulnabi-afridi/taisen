import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

// Assets
import CreatedByMany from "../../public/assets/pictures/Whitepaper/CreatedByMany.svg";
import ShapeLeft from "../../public/assets/pictures/Whitepaper/shapeLeft.svg";
import Globe from "../../public/assets/pictures/Whitepaper/globe.svg";
import ArrowDown from "../../public/assets/pictures/Whitepaper/arrowDown.svg";

function OutCommunity() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#16021F', py: { md: 10, xs: 8 }, mt: { md: 0, xs: '-1px' }, position: 'relative' }} >
                <Container maxWidth="big" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    {/* Our Community */}
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row-reverse', xs: 'column' }, position: 'relative', zIndex: 3 }} >
                        <Box sx={{ width: { md: '40%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                            <Box>
                                <Image src={CreatedByMany} width={429} height={422} objectFit={'contain'} />
                            </Box>
                        </Box>
                        <Box sx={{ width: { md: '60%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
                            <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: { md: '51px', xs: '36px' }, lineHeight: { md: '68.75px', xs: '50px' }, fontWeight: 700, color: '#FBFAF5', textTransform: 'uppercase' }} >
                                Our community
                            </Topography>
                            <Topography variant='h2' sx={{
                                fontFamily: ['Poppins', 'sans - serif'], fontSize: { md: '18px', xs: '16px' }, lineHeight: {
                                    md: '46px',
                                    xs: '24px'
                                }, fontWeight: { md: 500, xs: 300 }, color: '#FBFAF5', textTransform: 'uppercase', mt: { md: 5, xs: 3 }
                            }} >
                                Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum varius, metus eu pretium auctor, dui arcure dui, at euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is eu quam ultricies, elementum etus nec, sollicitudin sem. Integer lectus diam, tempor ac finibus vel,
                            </Topography>
                        </Box>
                    </Box>

                    {/* Globe */}
                    <Box sx={{mt:14}} >
                    <Image src={Globe} width={1320} height={565} objectFit={'contain'} />
                    </Box>

                    {/* indication */}
                    <Box sx={{ mt: 10,display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Topography variant='h2' sx={{ fontFamily: ['Poppins', 'sans-serif'], fontSize: { md: '20px', xs: '18px' }, lineHeight: '26px', fontWeight: 700, color: '#FBD005', textTransform: 'capitalize', letterSpacing:'1px',mb:2 }} >
                            Our Intro
                        </Topography>
                        <Image src={ArrowDown} width={24} height={28} objectFit={'contain'} />
                    </Box>
                </Container>
                {/* Side shape */}
                <Box sx={{ position: 'absolute', right: 0, top: { md: '100px', xs: 0 }, zIndex: 0 }} >
                    <Image src={ShapeLeft} width={450} height={408} objectFit={'contain'} />
                </Box>
            </Box>
        </>
    )
}

export default OutCommunity