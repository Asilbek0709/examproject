"use client"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Collabaration from "./components/Collabaration";
import About from "./components/About";
import Slider from "./components/Feedbacks";
import Integrations from "./components/Integrations";
import Guideline from "./components/Guideline";
import MoreInfo from "./components/MoreInfo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Collabaration></Collabaration>
      <About></About>
      <Slider></Slider>
      <Integrations></Integrations>
      <Guideline></Guideline>
      <MoreInfo></MoreInfo>
      <Footer></Footer>
    </>
  );
}
