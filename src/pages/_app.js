import React from "react";
import NextApp from "next/app";

import Header from "../components/Header";

import theme from "../theme";
import { ThemeProvider } from "theme-ui";
import GlobalStyle from "../global.styles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
