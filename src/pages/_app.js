import React from "react";
import NextApp from "next/app";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import About from "../containers/About";
import Resume from "../containers/Resume";
import Portfolio from "../containers/Portfolio";

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
        <Footer data={resumeData.main} />
        {/*<Component {...pageProps} /> */}
      </ThemeProvider>
    );
  }
}
