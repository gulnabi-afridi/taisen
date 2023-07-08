import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Topography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

// Assets
import ArrowDown from "../../public/assets/pictures/Whitepaper/arrowDown.svg";

function Hero() {
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
          <Topography
            variant="h2"
            sx={{
              fontFamily: "Cinzel",
              fontSize: { md: "80px", xs: "46px" },
              lineHeight: { md: "107.84px" },
              fontWeight: 700,
              color: "#FBFAF5",
              textTransform: "uppercase",
            }}
          >
            Whitepaper
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
              textAlign: "center",
              mt: { md: 5, xs: 2 },
              width: { md: "80%" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum
            varius, metus eu pretium auctor, dui arcure dui, at euismod orci
            quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is
            eu quam ultricies, elementum etus nec, sollicitudin sem. Integer
            lectus diam, tempor ac finibus vel, tempor sit amet ipsum.metus eu
            pretium auctor, dui arcu ornare dui, t euismod orci quam et
          </Topography>

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
              Our Team
            </Topography>
            <Image
              src={ArrowDown}
              width={24}
              height={28}
              objectFit={"contain"}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
