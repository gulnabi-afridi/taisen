// import '../styles/fonts.css';
import '../styles/globals.css';
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { gsap } from "gsap";
// gsap.registerPlugin(ScrollTrigger);

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

import Layout from '../pages/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp