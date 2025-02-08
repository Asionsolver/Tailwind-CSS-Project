// import BrandLogo from "@/assets/brand-logo.png";

import { Download } from "@/components/download/Download";
import { Features } from "@/components/features/Features";
import { Find } from "@/components/find/FInd";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Find />
      <Features />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
