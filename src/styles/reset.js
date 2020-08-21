import { css } from "@emotion/core";

const resetCss = css`
  body {
    margin: 0;
  }

  a,
  button {
    cursor: pointer;
  }

  button:focus,
  button:active,
  canvas:focus,
  canvas:active {
    outline: none;
  }
`;

const defaultStyles = ({ theme }) => css`
  html {
    font-size: 62.5%; // --> 1rem ≙ 10px
    -webkit-font-smoothing: antialiased;
  }
`;

export default css`
  ${resetCss}
  ${defaultStyles}
`;
