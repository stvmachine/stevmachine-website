import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
import { Global } from "@emotion/core";

import theme from "../theme";
import resetStyles from "../styles/reset";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global styles={resetStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
