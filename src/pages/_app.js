import React from "react";
import NextApp from "next/app";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";

import theme from "../theme";
import { ThemeProvider } from "theme-ui";
import resumeData from "../constants/resumeData";

export default class App extends NextApp {
  render() {
    // const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
        {/*<Component {...pageProps} /> */}
      </ThemeProvider>
    );
  }
}
