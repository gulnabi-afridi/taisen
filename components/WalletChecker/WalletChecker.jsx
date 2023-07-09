import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import mintBgImage from "/public/assets/mint/bgImage.png";
import ResponsiveHeading from "../Common/ResponsiveHeading";
import { TextField } from "@mui/material";

function WalletChecker() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "100vh", height: "auto" },
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
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          px: { md: 0, xs: 2 },
          py: { md: 0, xs: 14 },
        }}
      >
        <ResponsiveHeading
          sx={{
            fontSize: "37px",
            color: "black",
            textAlign: "center",
            lineHeight: { md: "", xs: 1 },
          }}
        >
          Please insert your ETH address
        </ResponsiveHeading>
        {/* ============================> Eth address input */}
        <TextField
          sx={{
            color: "white",
            maxWidth: "540px",
            width: "100%",
            "& fieldset": {
              border: "3px solid black",
              borderRadius: "3px",
            },
            "& input": {
              background: "#596b75",
              height: "15px",
              width: "100%",
              border: "none",
              color: "black",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "600",
              fontFamily: {
                xs: "consolas",
                md: "Franklin-Gothic-Heavy-Regular",
              },
            },
          }}
        />
        {/* =============================>check button */}
        <Box
          sx={{
            "& button": {
              width: { md: "300px", xs: "100%" },
              border: "none",
              height: "70px",
              textTransform: "uppercase",
              background: "#8fa2aa",
              color: "white",
              fontSize: "25px",
              borderRadius: "5px",
              letterSpacing: "3px",
              lineHeight: "0px",
              px: 4,
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
              check
            </ResponsiveHeading>
          </button>
        </Box>
        <ResponsiveHeading
          sx={{
            fontStyle: "italic",
            color: "black",
            fontSize: "35px",
            letterSpacing: "2px",
          }}
        >
          Result
        </ResponsiveHeading>
        {/* ============================> loader image */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "700px",
            height: { md: "57px", xs: "110px" },
            position: "relative",
          }}
        >
          <Image unoptimized={true} src="/assets/walletChecker/loader1.gif" layout="fill"></Image>
        </Box>
      </Box>
    </Box>
  );
}

export default WalletChecker;
