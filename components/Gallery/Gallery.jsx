import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Topography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import Image from "next/image";

// Assets
import playicon from "../../public/assets/pictures/Gallery/playicon.svg";

function Gallery() {
  return (
    <>
      <Box
        id={"Gallery"}
        sx={{
          width: "100%",
          height: { md: "110vh", xs: "100vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          mt: "-80px",
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
              width: { md: "80%" },
              fontFamily: "Cinzel",
              fontSize: { md: "80px", xs: "36px" },
              lineHeight: { md: "90px" },
              fontWeight: 700,
              color: "#FBFAF5",
              textTransform: "uppercase",
              position: "relative",
              "&:before": {
                content: '""',
                height: "6px",
                width: { md: "140px", xs: "50px" },
                position: "absolute",
                bottom: { md: "10px", xs: "0px" },
                right: "0px",
                background: "white",
              },
            }}
          >
            Lorem ipsum{" "}
            <Box component={"span"} sx={{ color: "rgba(251, 208, 5, 1)" }}>
              dolor
            </Box>
            <br />
            sit amet, consectetur{" "}
            <Box component={"span"} sx={{ color: "rgba(251, 208, 5, 1)" }}>
              adipisci
            </Box>{" "}
            elit.
          </Topography>
        </Container>
        <Box
          sx={{
            width: "100%",
            height: "160px",
            backgroundImage:
              "linear-gradient(180deg, rgba(22, 2, 31, 0) 0%, rgba(22, 2, 31, 0) 25.52%, rgba(22, 2, 31, 0.61) 62.5%, rgba(22, 2, 31, 0.92) 83.33%, #16021F 100%)",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#16021F",
          pb: 14,
          mt: "-100px",
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
          <Box
            className="player-wrapper"
            sx={{
              width: { md: "1002px", xs: "100%" },
              height: { md: "649px", xs: "300px" },
              m: "auto",
              overflow: "hidden",
              position: "relative",
              background: "rgba(0, 0, 0, 0.74)",
              borderRadius: "34px",
              border: "3px solid white",
            }}
          >
            <ReactPlayer
              className="react-player"
              url={"https://www.youtube.com/watch?v=KNdlxFc-HUU"}
              width="100%"
              height="100%"
              light={"/assets/pictures/Gallery/thumbnail.svg"}
              playIcon={
                <Image
                  src={playicon}
                  width={110}
                  height={110}
                  objectFit={"contain"}
                />
              }
              controls={true}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Gallery;
