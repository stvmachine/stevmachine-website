import { css } from "@emotion/css";

const defaultStyles = css`
  html {
    font-size: 62.5%; // --> 1rem ≙ 10px
    -webkit-font-smoothing: antialiased;
    min-width: 360px;
    scroll-behavior: smooth;
  }

  /* Links */
  p a,
  p a:visited {
    line-height: inherit;
  }

  /* Lists */
  ul,
  ol {
    margin-bottom: 24px;
    margin-top: 12px;
  }

  ul {
    list-style: none outside;
  }

  ol {
    list-style: decimal;
  }

  ol,
  ul.circle {
    margin-left: 30px;
  }

  ul.circle {
    list-style: circle outside;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin: 6px 0 6px 30px;
  }

  ul ul li,
  ul ol li,
  ol ol li,
  ol ul li {
    margin-bottom: 6px;
  }

  li {
    line-height: 18px;
    margin-bottom: 12px;
  }
`;

export default defaultStyles;
