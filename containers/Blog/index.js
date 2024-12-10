import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { injectGlobal } from "@emotion/css";
import {
  ThemeProvider as ThemeProviderChakraUI,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";

import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import blogTheme from "../styles/blogTheme";
import MDXComponents from "../components/MDXComponents";

const GlobalStylesBlog = () => {
  const { colorMode } = useColorMode();

  injectGlobal(`
    ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

    ::selection {
      background-color: #47a3f3;
      color: #fefefe;
    }

    html {
      min-width: 360px;
      scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: ${colorMode === "light" ? "white" : "#171923"};
    }
  `);

  return <CSSReset />;
};

const BlogLayout = ({ children }) => (
  <ThemeProviderChakraUI theme={blogTheme}>
    <MDXProvider components={MDXComponents}>
      <ColorModeProvider value="light">
        <GlobalStylesBlog />
        {children}
      </ColorModeProvider>
    </MDXProvider>
  </ThemeProviderChakraUI>
);

export default BlogLayout;
