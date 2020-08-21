import React from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import About from "../containers/About";
import Resume from "../containers/Resume";
import Portfolio from "../containers/Portfolio";
import resumeData from "../constants/resumeData";

const HomeSPA = () => (
  <>
    <Header data={resumeData.main} />
    <About data={resumeData.main} />
    <Resume data={resumeData.resume} />
    <Portfolio data={resumeData.portfolio} />
    <Footer data={resumeData.main} />
  </>
);

export default HomeSPA;
