export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#000",
    background: "#0f0f0f",
    link: "#11abb0",
    primary: "#07c",
    secondary: "#609",
    white: "#fff",
    orange: "#f06000",
    grey: "#444",
    grey2: "#313131",
    grey3: "#3d4145",
    grey4: "#303030",
    onyx: "#0f0f0f",
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
      bg: "link",
      "&:hover": {
        color: "white",
        bg: "grey3",
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
      bg: "grey4",
      "&:hover": {
        bg: "link",
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
      "-webkit-transition": "color .2s ease-in-out",
      "-moz-transition": "color .2s ease-in-out",
      "-o-transition": "color .2s ease-in-out",
      "-ms-transition": "color 0.2s ease-in-out",
      transition: "color .2s ease-in-out",
      ":active,:hover": {
        background: "gray3",
        color: "white",
      },
      "::-moz-focus-inner": {
        border: 0,
        padding: 0,
      },
    },
  },
};
