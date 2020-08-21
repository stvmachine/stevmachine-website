import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
import { Global, css } from "@emotion/core";

import theme from "../theme";
import resetStyles from "../styles/reset";
import defaultStyles from "../styles/default";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Global
          styles={css`
            ${resetStyles}
            ${defaultStyles}
          `}
        />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
