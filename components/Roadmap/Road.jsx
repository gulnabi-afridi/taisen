import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

// Assets
import Vision from "../../public/assets/pictures/Roadmap/vision.svg";

function Roadmap1({ RoadMapNo, RoadMapName }) {
    return (
        <>
            <Box sx={{ width: '100%', minHeight: '905px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#2C1635', borderRadius: '13px', p: 4 }} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' } }} >
                    <Box sx={{ width: { md: '60%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                        <Topography variant='h2' sx={{ fontFamily: ['Poppins', 'sans-serif'], fontSize: { md: '20px', xs: '18px' }, lineHeight: '26px', fontWeight: 500, color: 'rgba(251, 208, 5, 1)', textTransform: 'unset' }} gutterBottom >
                            Roadmap no {RoadMapNo}
                        </Topography>
                        <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: { md: '60px', xs: '28px' }, lineHeight: { md: '80.88px', xs: '36px' }, fontWeight: 700, color: '#FBFAF5', textTransform: 'uppercase', transition: 'all 0.3s ease', }} >
                            {RoadMapName}
                        </Topography>
                        <Topography variant='h2' sx={{
                            fontFamily: ['Poppins', 'sans - serif'], fontSize: { md: '18px', xs: '16px' }, lineHeight: {
                                md: '46px',
                                xs: '24px'
                            }, fontWeight: { md: 500, xs: 300 }, color: '#FBFAF5', textTransform: 'uppercase', mt: { md: 8, xs: 4 }
                        }} >
                            Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum varius, metus eu pretium auctor, dui arcure dui, at euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is eu quam ultricies, elementum etus nec, <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum varius, metus eu pretium auctor, dui arcure dui, at euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is eu quam ultricies, elementum etus nec,
                        </Topography>
                    </Box>
                    <Box sx={{ width: { md: '40%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Image src={Vision} width={554} height={642} objectFit={'contain'} />
                    </Box>
                </Box>
                <Topography variant='h2' sx={{
                    fontFamily: ['Poppins', 'sans - serif'], fontSize: { md: '18px', xs: '16px' }, lineHeight: {
                        md: '46px',
                        xs: '24px'
                    }, fontWeight: { md: 500, xs: 300 }, color: '#FBFAF5', textTransform: 'uppercase', mt: { md: 8, xs: 4 }
                }} >
                    Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum varius, metus eu pretium auctor, dui arcure dui, at euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is eu quam ultricies, elementum etus nec,
                </Topography>
            </Box>
        </>
    )
}

export default Roadmap1