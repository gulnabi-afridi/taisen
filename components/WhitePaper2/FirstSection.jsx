import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import bgImage from "../../public/assets/pictures/WhitePaper2/whitePaper2bg.png";
import Image from "next/image";
import ResponsiveHeading from "../Common/ResponsiveHeading";
import Link from "next/link";
import AnchorLink from "@mui/material/Link";

function FirstSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#596b75",
        py: { xs: 10, md: "0" },
      }}
    >
      <Container maxWidth="big">
        {/* =============bg image=========== */}
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            position: "relative",
            left: "0px",
          }}
        >
          <Image
            src={bgImage}
            layout="fill"
            objectFit="contain"
            objectPosition="right"
            alt="whitePaper2bg"
          ></Image>
          {/* =============== text =============== */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "start",
              alignItems: "start",
              width: { xs: "100%", md: "100%" },
              pl: 2,
              zIndex: 100,
            }}
          >
            <ResponsiveHeading
              sx={{
                textAlign: "left",
                color: "#151528",
                fontSize: { xs: "45px", lg: "80px" },
                lineHeight: "5.5rem",
                textTransform: "uppercase",
                fontFamily: "Franklin-Gothic-Heavy-Regular",
                "& span": {
                  color: "#721a1b",
                },
              }}
            >
              <span>Taisen</span> <br /> is not just jpeg
            </ResponsiveHeading>
          </Box>
          {/*  */}
          <Box sx={{}}>
            <ResponsiveHeading
              sx={{
                textAlign: "left",
                color: "#151528",
                fontSize: { xs: "45px", lg: "52px" },
                lineHeight: "5.5rem",
                textTransform: "uppercase",
                fontFamily: "Franklin-Gothic-Heavy-Regular",
                pl: 2,
              }}
            >
              art is essential though
            </ResponsiveHeading>
          </Box>
          {/* link */}
          <Link href="#explore">
            <Box sx={{
              mt: 3,
              cursor: "pointer",
              zIndex: 5,
              textDecoration: "none",
              color: "#828f97",
              ml: 2,
              p: 1,
              fontFamily: "consolas",
              textTransform: "uppercase",
              background: "#3f4040",
              borderRadius: "2px",
            }}>

                scroll to explore

            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default FirstSection;
