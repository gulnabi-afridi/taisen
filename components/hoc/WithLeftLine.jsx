import React from "react";
import Box from "@mui/material/Box";

const WithLeftLine = (WrapperComponent, section) =>
  function withLeftLineComponent(props) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2px 1fr",
          gridGap: "2rem",
          pt: { xs: "0", md: "8rem" },
        }}
      >
        {/*     Left line    */}
        <Box
          sx={{
            width: "4px",
            height: "100%",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
            gridGap: "8px",
            pt: { xs: "0", md: "8rem" },
          }}
        >
          {[1, 2, 3, 4, 5].map((val, index) => (
            <Box
              key={val}
              onClick={() => {
                document.querySelector(`.section-${val}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
              sx={{
                background: section === val ? "#fff" : "#B0B0C1",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
        <WrapperComponent {...props} />
      </Box>
    );
  };

export default WithLeftLine;
