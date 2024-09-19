import React from "react";
// import { useRouter } from "next/router";
import { ThemeUIProvider } from "theme-ui";
// import { MDXProvider } from "@mdx-js/react";
import { injectGlobal } from "@emotion/css";
// import MDXComponents from "../components/MDXComponents";
// import {
//   ThemeProvider as ThemeProviderChakraUI,
//   CSSReset,
//   ColorModeProvider,
//   useColorMode,
// } from "@chakra-ui/react";

// import { prismLightTheme, prismDarkTheme } from "../styles/prism";
// import blogTheme from "../styles/blogTheme";
import theme from "../styles/theme";
import resetStyles from "../styles/reset";
import defaultStyles from "../styles/default";


// const GlobalStylesBlog = () => {
//   const { colorMode } = useColorMode();

//   injectGlobal(`
//           ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

//           ::selection {
//             background-color: #47a3f3;
//             color: #fefefe;
//           }

//           html {
//             min-width: 360px;
//             scroll-behavior: smooth;
//           }

//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//             background: ${colorMode === "light" ? "white" : "#171923"};
//           }
//         `);

//   return (
//     <>
//       <CSSReset />
//     </>
//   );
// };

const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  injectGlobal(`
    ${resetStyles}
    ${defaultStyles}
  `);

  return (
    <>
      {
      // router.asPath.includes("blog") ? (
      //   <>
      //     <ThemeProviderChakraUI theme={blogTheme}>
      //       <MDXProvider components={MDXComponents}>
      //         <ColorModeProvider value="light">
      //           <GlobalStylesBlog />
      //           <Component {...pageProps} />
      //         </ColorModeProvider>
      //       </MDXProvider>
      //     </ThemeProviderChakraUI>
      //   </>
      // ) : 
      (<>
            <ThemeUIProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeUIProvider>
          </>
      )}
    </>
  );
};

export default App;
