export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#000",
    background: "#fff",
    link: "11abb0",
    primary: "#07c",
    secondary: "#609",
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
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
    grey: {
      color: "white",
      bg: "#444",
      "&:hover": {
        color: "black",
        bg: "white",
      },
    },
  },
};
