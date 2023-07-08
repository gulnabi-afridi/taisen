import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Topography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// Assets
import CreatedByMany from "../../public/assets/pictures/Whitepaper/CreatedByMany.svg";
import Shape from "../../public/assets/pictures/Whitepaper/shape.svg";
import ArrowDown from "../../public/assets/pictures/Whitepaper/arrowDown.svg";

function OurTeam() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#16021F",
          py: { md: 10, xs: 8 },
          mt: { md: 0, xs: "-1px" },
          position: "relative",
        }}
      >
        <Container
          maxWidth="big"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Created by Many */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" },
              position: "relative",
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                width: { md: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  src={CreatedByMany}
                  width={429}
                  height={422}
                  objectFit={"contain"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: { md: "60%", xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Topography
                variant="h2"
                sx={{
                  fontFamily: "Cinzel",
                  fontSize: { md: "51px", xs: "36px" },
                  lineHeight: { md: "68.75px", xs: "50px" },
                  fontWeight: 700,
                  color: "#FBFAF5",
                  textTransform: "uppercase",
                }}
              >
                CREATED BY MANY
              </Topography>
              <Topography
                variant="h2"
                sx={{
                  fontFamily: ["Poppins", "sans - serif"],
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: {
                    md: "46px",
                    xs: "24px",
                  },
                  fontWeight: { md: 500, xs: 300 },
                  color: "#FBFAF5",
                  textTransform: "uppercase",
                  mt: { md: 5, xs: 3 },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisci elit.
                Vestibulum varius, metus eu pretium auctor, dui arcure dui, at
                euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in,
                semper magna. is eu quam ultricies, elementum etus nec,
                sollicitudin sem. Integer lectus diam, tempor ac finibus vel,
              </Topography>
            </Box>
          </Box>

          {/* Team */}
          <Box sx={{ flexGrow: 1, width: "100%", mt: 18 }}>
            <Grid container columnSpacing={{ md: 0, xs: 0 }} rowSpacing={6}>
              {Team.map((member, index) => {
                return (
                  <Grid key={index} item xs={12} md={3}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image */}
                      <Box>
                        <Image
                          src={member.ImageURL}
                          width={270}
                          height={270}
                          objectFit={"contain"}
                        />
                      </Box>
                      {/* Name */}
                      <Topography
                        variant="h2"
                        sx={{
                          fontFamily: "Cinzel",
                          fontSize: { md: "28px", xs: "20px" },
                          lineHeight: { md: "46px", xs: "28px" },
                          fontWeight: 600,
                          color: "#FBFAF5",
                          textTransform: "capitalize",
                          mt: 2,
                        }}
                      >
                        {member.Name}
                      </Topography>
                      <Topography
                        variant="h2"
                        sx={{
                          fontFamily: ["Poppins", "sans - serif"],
                          fontSize: {
                            md: "18px",
                            xs: "16px",
                          },
                          lineHeight: {
                            md: "46px",
                            xs: "30px",
                          },
                          fontWeight: 500,
                          color: "#FBFAF5",
                          textTransform: "unset",
                          textAlign: "center",
                          mt: 0,
                          width: { md: "80%" },
                        }}
                      >
                        {member.Skill}
                      </Topography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* indication */}
          <Box
            sx={{
              mt: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Topography
              variant="h2"
              sx={{
                fontFamily: ["Poppins", "sans-serif"],
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "26px",
                fontWeight: 700,
                color: "#FBD005",
                textTransform: "capitalize",
                letterSpacing: "1px",
                mb: 2,
              }}
            >
              Our Community
            </Topography>
            <Image
              src={ArrowDown}
              width={24}
              height={28}
              objectFit={"contain"}
            />
          </Box>
        </Container>
        {/* Side shape */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: { md: "100px", xs: 0 },
            zIndex: 0,
          }}
        >
          <Image src={Shape} width={450} height={408} objectFit={"contain"} />
        </Box>
      </Box>
    </>
  );
}

export default OurTeam;

const Team = [
  {
    id: 1,
    Name: "afrifi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member1.svg",
  },
  {
    id: 2,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member2.svg",
  },
  {
    id: 3,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member3.svg",
  },
  {
    id: 4,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member4.svg",
  },
  {
    id: 5,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member5.svg",
  },
  {
    id: 6,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member6.svg",
  },
  {
    id: 7,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member7.svg",
  },
  {
    id: 8,
    Name: "afridi",
    Skill: "web-developer",
    ImageURL: "/assets/pictures/Whitepaper/member8.svg",
  },
];
