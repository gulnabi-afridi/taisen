import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import mintBgImage from "/public/assets/mint/bgImage.png";
import ResponsiveHeading from "../Common/ResponsiveHeading";
import { TextField } from "@mui/material";

function Mint() {
  // states
  const [Mint_Count, Set_Mint_Count] = useState(0);
  // functions
  const IncrementCount = () => {
    return Set_Mint_Count(Mint_Count + 1);
  };
  const DecrementCount = () => {
    return Set_Mint_Count(Mint_Count - 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        background: "#596b75",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { md: "87%", xs: "100%" },
          backgroundImage: "url(/assets/mint/bgImage.png)",
          backgroundPosition: { md: "", xs: "center" },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* =======>connect wallet button */}
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
            items: "center",
            mt: { md: "40px", xs: "110px" },
            // marginTop: { xl: "0px", xs: "50px" },
            "& button": {
              mr: { md: "30px", xs: "0px" },
            },
          }}
        >
          <button
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "240px",
              border: "none",
              background: "#701d1d",
              color: "white",
              fontSize: "25px",
              borderRadius: "10px",
              letterSpacing: "3px",
              cursor: "pointer",
              "&:hover": {},
            }}
          >
            Connect Wallet
          </button>
        </Box>
        {/*     */}
        <Box
          sx={{
            maxWidth: "430px",
            width: "100%",
            height: "300px",
            position: "absolute",
            top: { xs: "70%", md: "50%" },
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            px: "20px",
          }}
        >
          <ResponsiveHeading
            sx={{
              width: "100%",
              textAlign: "center",
              color: "black",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Mints Count
          </ResponsiveHeading>
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "start", xs: "center" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* ================>left button */}
            <Box
              onClick={DecrementCount}
              sx={{
                width: "40px",
                height: "90px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Image
                src="/assets/mint/leftButton.svg"
                layout="fill"
                alt="left-button"
              ></Image>
            </Box>
            {/* input field */}
            <TextField
              sx={{
                "& fieldset": {
                  border: "3px solid black",
                  borderRadius: "5px",
                },

                "& input": {
                  borderRadius: "3px",
                  height: "55px",
                  width: "250px",
                  border: "none",
                  color: "black",
                  textAlign: "center",
                  fontSize: "70px",
                  fontWeight: "600",
                  fontFamily: {
                    xs: "consolas",
                    md: "Franklin-Gothic-Heavy-Regular",
                  },
                },
              }}
              value={Mint_Count}
            />
            {/*==================> right button */}
            <Box
              onClick={IncrementCount}
              sx={{
                width: "40px",

                height: "90px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Image
                src="/assets/mint/rightButton.svg"
                layout="fill"
                alt="left-button"
              ></Image>
            </Box>
          </Box>
          {/* ======================>Mint button */}
          <Box
            sx={{
              width: "100%",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              items: "center",
              "& button": {
                width: "100%",
                maxWidth: "280px",
                height: "100%",
                border: "none",
                textTransform: "uppercase",
                background: "#8fa2aa",
                color: "white",
                fontSize: "25px",
                borderRadius: "10px",
                letterSpacing: "3px",
                cursor: "pointer",
              },
            }}
          >
            <button>
              <ResponsiveHeading
                sx={{
                  fontSize: "46px",
                  color: "black",
                  lineHeight: "0px",
                  color: "#701d1d",
                }}
              >
                Mint
              </ResponsiveHeading>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Mint;
