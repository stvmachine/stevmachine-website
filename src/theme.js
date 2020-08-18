export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#000",
    background: "#fff",
    link: "11abb0",
    primary: "#07c",
    secondary: "#609",
    white: "#FFF",
    grey: "#444",
    onyx: "#0f0f0f",
    graniteBlack: "#313131",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#0cf",
        secondary: "#90c",
      },
    },
  },
  fonts: {
    body: '"opensans-regular", "sans-serif"',
    heading: "inherit",
  },
  buttons: {
    grey: {
      color: "white",
      bg: "grey",
      "&:hover": {
        color: "text",
        bg: "white",
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
  },
  links: {
    underline: {
      textDecoration: "underline",
      color: "white",
      ":hover": {
        color: "inherit",
      },
    },
  },
  styles: {
    // To add base, top-level styles to the <body>
    root: {
      background: "onyx",
      fontFamily: "body",
    },
    a: {
      textDecoration: "none",
      outline: 0,
      color: "link",
      "-webkit-transition": "color .3s ease-in-out",
      "-moz-transition": "color .3s ease-in-out",
      "-o-transition": "color .3s ease-in-out",
      ":hover": { color: "graniteBlack" },
      ":focus": { color: "graniteBlack" },
    },
  },
};
