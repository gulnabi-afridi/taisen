import Appbar from "../components/Headers/Appbar";
import Player from "../components/AudioPlayer/Player";

// MUI Theme customize
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Franklin-Gothic-Heavy-Regular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Franklin'), local('Franklin'), url(/fonts/Franklin-Gothic-Heavy-Regular/Franklin-Gothic-Heavy-Regular.ttf) format('ttf');
       }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      big: 1400,
      xl: 1550,
      xxl: 1700,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
    <ThemeProvider theme={theme} >
      <Appbar />
      <Player />
      <main>{children}</main>
    </ThemeProvider>
    </>
  )
}
