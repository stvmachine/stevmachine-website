import React from "react";
import { useRouter } from "next/router";
// import { MDXProvider } from "@mdx-js/react";
// import MDXComponents from "../components/MDXComponents";

import { ThemeProvider as ThemeProviderThemeUI } from "theme-ui";
import {
  ThemeProvider as ThemeProviderChakraUI,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { css, injectGlobal } from "@emotion/css";

// import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import theme from "../styles/theme";
// import blogTheme from "../styles/blogTheme";
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
  const router = useRouter();

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
      (
        ()=> {
          injectGlobal(`
                ${resetStyles}
                ${defaultStyles}
              `);
            return  <>
            <ThemeProviderThemeUI theme={theme}>
              <Component {...pageProps} />
            </ThemeProviderThemeUI>
          </>
        }
       
      )}
    </>
  );
};

export default App;
