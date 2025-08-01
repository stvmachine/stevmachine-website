import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import About from "../containers/About";
import Resume from "../containers/Resume";
import Portfolio from "../containers/Portfolio";
import resumeData from "../constants/resumeData";

import { ErrorBoundary } from "../components/ErrorBoundary";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const HomeSPA = () => (
  <Theme>
    <ErrorBoundary>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Footer data={resumeData.main} />
    </ErrorBoundary>
  </Theme>
);

export default HomeSPA;
