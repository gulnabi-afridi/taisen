import Hero from "../components/Home/Hero";
import PreparingArmySection from "../components/Home/PreparingArmySection";
import PhantasyWorldSection from "../components/Home/PhantasyWorldSection";
// import TeamSection from "../components/Home/TeamSection";
// import BillBoardSection from "../components/Home/BillBoardSection";
import Box from "@mui/material/Box";

function Home() {
  return (
    <Box
      className={"container"}
      sx={{
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        scrollSnapType: "y mandatory",
        maxHeight: "100vh",
      }}
    >
      <Box
        sx={{
          scrollSnapAlign: "start",
        }}
        className={"section section-1"}
      >
        <Hero />
      </Box>
      <Box
        sx={{
          scrollSnapAlign: "start",
        }}
        className={"section section-2"}
      >
        <PreparingArmySection />
      </Box>
      <Box
        sx={{
          scrollSnapAlign: "start",
        }}
        className={"section section-3"}
      >
        <PhantasyWorldSection />
      </Box>
      <Box
        sx={{
          scrollSnapAlign: "start",
        }}
        className={"section section-4"}
      >
        {/* <BillBoardSection /> */}
      </Box>
      <Box
        sx={{
          scrollSnapAlign: "start",
        }}
        className={"section section-5"}
      >
        {/* <TeamSection /> */}
      </Box>
    </Box>
  );
}

export default Home;
