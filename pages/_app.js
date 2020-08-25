import React from "react";
import NextApp from "next/app";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

import { ThemeProvider } from "theme-ui";
import { Global, css } from "@emotion/core";

import theme from "../theme";
import resetStyles from "../styles/reset";
import defaultStyles from "../styles/default";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <Global
            styles={css`
              ${resetStyles}
              ${defaultStyles}
            `}
          />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    );
  }
}
