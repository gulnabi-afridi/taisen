import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// Assets
import CreatedByMany from "../../public/assets/pictures/Whitepaper/CreatedByMany.svg";
import Shape from "../../public/assets/pictures/Whitepaper/shape.svg";

function OurIntro() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#16021F', py: { md: 10, xs: 8 }, mt: { md: 0, xs: '-1px' }, position: 'relative' }} >
                <Container maxWidth="big" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    {/* Out Intro */}
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, position: 'relative', zIndex: 3 }} >
                        <Box sx={{ width: { md: '40%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                            <Box>
                                <Image src={CreatedByMany} width={429} height={422} objectFit={'contain'} />
                            </Box>
                        </Box>
                        <Box sx={{ width: { md: '60%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
                            <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: { md: '51px', xs: '36px' }, lineHeight: { md: '68.75px', xs: '50px' }, fontWeight: 700, color: '#FBFAF5', textTransform: 'uppercase' }} >
                                Into the rabbit hole
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

                    {/* Gallery */}
                    <Box sx={{ flexGrow: 1, width: '100%', mt: 18 }}>
                        <Grid container columnSpacing={{ md: 0, xs: 0 }} rowSpacing={6} >
                            {
                                GalleryItems.map((item, index) => {
                                    return <Grid key={index} item xs={12} md={6} >
                                        <Box sx={{ maxWidth: '500px', minHeight: '202px', borderRadius: '11px', background: 'rgba(255, 252, 238, 0.06)', m: 'auto', p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, transition: 'all 0.3s ease', "&:hover": { background: 'linear-gradient(104.04deg, #FBD005 10.83%, #F58320 97.8%)' }, "&:hover h2": { color: 'rgba(22, 2, 31, 1)' } }} >
                                            {/* Image */}
                                            <Box sx={{ width: { md: '40%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <Image src={item.URL} width={167} height={180} objectFit={'contain'} />
                                            </Box>
                                            {/* text */}
                                            <Box sx={{ width: { md: '60%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column' }} >
                                                <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: { md: '34px', xs: '36px' }, lineHeight: { md: '46px', xs: '50px' }, fontWeight: 900, color: 'rgba(255, 255, 255, 1)', textTransform: 'uppercase', transition: 'all 0.3s ease' }} >
                                                    {item.name}
                                                </Topography>
                                                <Topography variant='h2' sx={{
                                                    fontFamily: ['Poppins', 'sans - serif'], fontSize: {
                                                        md: '18px',
                                                        xs: '16px'
                                                    }, lineHeight: {
                                                        md: '46px',
                                                        xs: '30px'
                                                    }, fontWeight: 500, color: 'rgba(255, 255, 255, 1)', textTransform: 'unset', transition: 'all 0.3s ease'
                                                }} >
                                                    {item.des}
                                                </Topography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Container>
                {/* Side shape */}
                <Box sx={{ position: 'absolute', left: 0, top: { md: '100px', xs: 0 }, zIndex: 0 }} >
                    <Image src={Shape} width={450} height={408} objectFit={'contain'} />
                </Box>
            </Box>
        </>
    )
}

export default OurIntro;

const GalleryItems = [
    {
        id: 1,
        name: 'Gallery',
        des: '1000 Taisens',
        URL: '/assets/pictures/Whitepaper/gallery.svg'
    },
    {
        id: 2,
        name: 'Career',
        des: 'Join our team',
        URL: '/assets/pictures/Whitepaper/gallery.svg'
    },
    {
        id: 3,
        name: 'twitter',
        des: 'Meet us at twitter',
        URL: '/assets/pictures/Whitepaper/gallery.svg'
    },
    {
        id: 4,
        name: 'discord',
        des: 'Join the community',
        URL: '/assets/pictures/Whitepaper/gallery.svg'
    },
]