import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import S1bg from "../../public/s1Bg.png";

import ResponsiveHeading from "../Common/ResponsiveHeading";
import ResponsiveParagraph from "../Common/ResponsiveParagraph";
import ButtonBadge from "../Common/ButtonBadge";
import WithHeader from "../hoc/WithHeader";
import WithTristanBg from "../hoc/WithTristanBg";
import { gsap } from "gsap";
import WithLeftLine from "../hoc/WithLeftLine";

function PreparingArmySection() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          justifyContent: "space-between",
          // alignItems: 'center',
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        {/* Left */}
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            display: "flex",
            // justifyContent: 'center',
            alignItems: "start",
            pt: { xs: "0", md: "8rem" },
            flexDirection: "column",
          }}
        >
          <ResponsiveHeading
            sx={{
              fontSize: { xs: "45px", md: "52px", lg: "70px" },
              lineHeight: { xs: "50px", lg: "70px" },
              textAlign: "left",
            }}
          >
            Taisen is preparing an army
          </ResponsiveHeading>
          <ResponsiveParagraph
            sx={{
              mt: "2rem",
            }}
          >
            You can follow us on Twitter and Discord to be informed of the
            process and the amazing journey ahead. <br />
            <br />
            For getting whitelisted, refer to the whitelist info channel on
            Discord.
          </ResponsiveParagraph>
          <Box
            sx={{
              mt: "2rem",
              display: "flex",
              gridGap: "8px",
              alignItems: "center",
            }}
          >
            {/*<CustomizedButton*/}
            {/*  Text={'Click me'} Grad_1={'#F58320'}*/}
            {/*  Grad_1_per={'17.09%'}*/}
            {/*  Grad_2={'#FBD005'}*/}
            {/*  Grad_2__per={'94.66%'}*/}
            {/*  deg={'91.89deg'}*/}
            {/*  color={'rgba(2, 2, 2, 1)'}*/}
            {/*/>*/}
            {/*<ButtonBadge>*/}
            {/*  gallery*/}
            {/*</ButtonBadge>*/}
          </Box>
        </Box>

        {/* Right */}
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Image src={S1bg} alt={"Section-1-background"} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WithTristanBg(WithLeftLine(PreparingArmySection, 2), "#47555E");
