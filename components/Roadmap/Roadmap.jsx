import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Topography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Road from "./Road";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Assets
import Line from "../../public/assets/pictures/Roadmap/line.svg";
import LineBlack from "../../public/assets/pictures/Roadmap/lineBlack.svg";

function Roadmap() {
  const [ToggleLineOne, Set_ToggleLineOne] = useState(false);
  const [ToggleLineTwo, Set_ToggleLineTwo] = useState(false);
  const [ToggleLineThree, Set_ToggleLineThree] = useState(false);
  const [ToggleLineFour, Set_ToggleLineFour] = useState(false);
  const [ToggleLineFive, Set_ToggleLineFive] = useState(false);
  const [ToggleLineSix, Set_ToggleLineSix] = useState(false);
  const [ToggleLineSeven, Set_ToggleLineSeven] = useState(false);
  const [ToggleLineEight, Set_ToggleLineEight] = useState(false);

  const [One, Set_One] = useState(false);
  const [Two, Set_Two] = useState(false);
  const [Three, Set_Three] = useState(false);
  const [Four, Set_Four] = useState(false);
  const [Five, Set_Five] = useState(false);
  const [Six, Set_Six] = useState(false);
  const [Seven, Set_Seven] = useState(false);
  const [Eight, Set_Eight] = useState(false);

  console.log(One);

  const Click_One = () => {
    Set_One(true);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(false);
  };
  const Click_Two = () => {
    Set_One(false);
    Set_Two(true);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(false);
  };
  const Click_Three = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(true);
    Set_Four(false);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(false);
  };
  const Click_Four = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(true);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(false);
  };
  const Click_Five = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(true);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(false);
  };
  const Click_Six = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    Set_Six(true);
    Set_Seven(false);
    Set_Eight(false);
  };
  const Click_Seven = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(true);
    Set_Eight(false);
  };
  const Click_Eight = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(true);
  };

  const RoadmapFlow = [
    {
      id: 1,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineOne,
      StateChange: Set_ToggleLineOne,
      ClickBtn: Click_One,
    },
    {
      id: 2,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineTwo,
      StateChange: Set_ToggleLineTwo,
      ClickBtn: Click_Two,
    },
    {
      id: 3,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineThree,
      StateChange: Set_ToggleLineThree,
      ClickBtn: Click_Three,
    },
    {
      id: 4,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineFour,
      StateChange: Set_ToggleLineFour,
      ClickBtn: Click_Four,
    },
    {
      id: 5,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineFive,
      StateChange: Set_ToggleLineFive,
      ClickBtn: Click_Five,
    },
    {
      id: 6,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineSix,
      StateChange: Set_ToggleLineSix,
      ClickBtn: Click_Six,
    },
    {
      id: 7,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineSeven,
      StateChange: Set_ToggleLineSeven,
      ClickBtn: Click_Seven,
    },
    {
      id: 8,
      mesg: "VISION AND VALUES",
      LineState: ToggleLineEight,
      StateChange: Set_ToggleLineEight,
      ClickBtn: Click_Eight,
    },
  ];

  const RoadmapDes = [
    {
      RoadMapNo: 1,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: One,
    },
    {
      RoadMapNo: 2,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Two,
    },
    {
      RoadMapNo: 3,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Three,
    },
    {
      RoadMapNo: 4,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Four,
    },
    {
      RoadMapNo: 5,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Five,
    },
    {
      RoadMapNo: 6,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Six,
    },
    {
      RoadMapNo: 7,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Seven,
    },
    {
      RoadMapNo: 8,
      RoadMapName: "VISION & Value",
      des1: "",
      des2: "",
      State: Eight,
    },
  ];
  const Back = () => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    Set_Six(false);
    Set_Seven(false);
    Set_Eight(false);
  };

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
            Roadmap
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
          <Box
            sx={
              !One &&
              !Two &&
              !Three &&
              !Four &&
              !Five &&
              !Six &&
              !Seven &&
              !Eight
                ? {
                    flexGrow: 1,
                    width: "100%",
                    mt: 18,
                  }
                : { display: "none" }
            }
          >
            <Grid container columnSpacing={{ md: 8, xs: 8 }} rowSpacing={8}>
              {RoadmapFlow.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} lg={4}>
                    <Box
                      onClick={item.ClickBtn}
                      onMouseOver={() => item.StateChange(true)}
                      onMouseLeave={() => item.StateChange(false)}
                      sx={{
                        maxWidth: { md: "482px", xs: "350px" },
                        width: "100%",
                        height: { md: "400px", xs: "300px" },
                        m: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        border: "6px dashed #FBD005",
                        // borderRadius: '50%',
                        p: 1,
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        "&:hover": {
                          background: "#FBD005",
                          border: "6px solid #16021F",
                        },
                        "&:hover div": {
                          border: "5px solid #16021F",
                        },
                        "&:hover h2": {
                          color: "#16021F",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          m: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          border: "6px dashed transparent",
                          // borderRadius: '50%'
                        }}
                      >
                        <Topography
                          variant="h2"
                          sx={{
                            fontFamily: "Cinzel",
                            fontSize: { md: "100px", xs: "60px" },
                            lineHeight: { md: "134.8px" },
                            fontWeight: 700,
                            color: "#FBFAF5",
                            textTransform: "uppercase",
                            transition: "all 0.3s ease",
                          }}
                        >
                          0{item.id}
                        </Topography>
                        <Topography
                          variant="h2"
                          sx={{
                            fontFamily: ["Poppins", "sans-serif"],
                            fontSize: { md: "24px", xs: "18px" },
                            lineHeight: "37.5px",
                            fontWeight: 500,
                            color: "rgba(228, 235, 254, 1)",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            mb: 1,
                            mt: 2,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {item.mesg}
                        </Topography>
                        <Image
                          src={item.LineState ? LineBlack : Line}
                          width={231}
                          height={19}
                          objectFit={"contain"}
                        />
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box
            onClick={() => Back()}
            sx={
              One || Two || Three || Four || Five || Six || Seven || Eight
                ? {
                    mt: {
                      md: 24,
                      xs: 10,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }
                : { display: "none" }
            }
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "1px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  border: "none",
                  background:
                    "linear-gradient(104.04deg, #FBD005 10.83%, #F58320 97.8%)",
                },
                "&:hover svg": { color: "rgba(22, 2, 31, 1)" },
              }}
            >
              <ArrowBackIcon
                sx={{
                  color: "white",
                  fontSize: "30px",
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
          </Box>
          {RoadmapDes.map((item, index) => {
            return (
              <Box
                key={index}
                sx={item.State ? { mt: { md: 4, xs: 4 } } : { display: "none" }}
              >
                <Road
                  RoadMapNo={item.RoadMapNo}
                  RoadMapName={item.RoadMapName}
                />
              </Box>
            );
          })}
        </Container>
      </Box>
    </>
  );
}

export default Roadmap;
