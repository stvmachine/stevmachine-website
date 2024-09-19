import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    ...chakraTheme.colors,
    link: "#11abb0",
    primary: "#07c",
    secondary: "#609",
  },
  fonts: {
    body: '"opensans-regular", "sans-serif"',
    heading: "inherit",
  },
  // Typography
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  breakpoints: ["480px", "767px", "900px", "1024px"],
  // Variants
  text: {
    heading: {
      fontFamily: "'opensans-bold', sans-serif",
      fontWeight: "normal",
      color: "gray.800",
    },
  },
  links: {
    underline: {
      textDecoration: "underline",
      color: "white",
      ":hover": {
        color: "orange",
      },
    },
    nav: {
      color: "white",
      bg: "gray600",
      "&:hover": {
        bg: "link",
      },
    },
  },
  buttons: {
    primary: {
      transition: "all .2s ease-in-out",
      borderRadius: "3px",
      color: "white",
      bg: "link",
      "&:hover": {
        color: "white",
        bg: "gray600",
      },
    },
  },
  images: {
    avatar: {
      width: 200,
      height: 200,
      borderRadius: "25%",
      objectFit: "cover",
    },
    portfolio: {
      textAlign: "center",
      maxWidth: 350,
      minHeight: 100,
      maxHeight: 250,
    },
    resumeTech: {
      width: 150,
      height: 150,
    },
  },
  // Default styles
  styles: {
    // To add base, top-level styles to the <body>
    root: {
      fontFamily: "body",
      fontSize: "15px",
      lineHeight: "30px",
      color: "black",
      background: "#0f0f0f",
    },
    h1: {
      variant: "text.heading",
      fontSize: "38px",
      lineHeight: "42px",
      marginBottom: "12px",
      letterSpacing: "-1px",
    },
    h2: {
      variant: "text.heading",
      fontSize: "28px",
      lineHeight: "36px",
      marginBottom: "6px",
    },
    h3: {
      variant: "text.heading",
      fontSize: "22px",
      lineHeight: "30px",
      marginBottom: "12px",
    },
    h4: {
      variant: "text.heading",
      fontSize: "20px",
      lineHeight: "30px",
      marginBottom: "6px",
    },
    h5: {
      variant: "text.heading",
      fontSize: "18px",
      lineHeight: "30px",
    },
    h6: {
      variant: "text.heading",
      fontSize: "14px",
      lineHeight: "30px",
    },
    a: {
      color: "link",
      WebkitTransition: "color .3s ease-in-out",
      MozTransition: "color .3s ease-in-out",
      OTransition: "color .3s ease-in-out",
      msTransition: "color .3s ease-in-out",
      transition: "color .3s ease-in-out",
      ":active,:hover": {
        background: "gray300",
        color: "white",
      },
      "::-moz-focus-inner": {
        border: 0,
        padding: 0,
      },
    },
    p: {
      margin: "0 0 30px 0",
    },
    em: {
      font: "15px/30px 'opensans-italic', sans-serif",
    },
    hr: {
      border: "solid #E3E3E3",
      borderWidth: "1px 0 0",
      clear: "both",
      margin: "11px 0 30px",
      height: 0,
    },
  },
};

export default theme;
