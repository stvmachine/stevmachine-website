import { Global, css } from "@emotion/core";

// --
// CSS Resets
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

const defaultStyles = css`
  body {
    background: #0f0f0f;
  }

  header {
    position: relative;
    height: 800px;
    min-height: 500px;
    width: 100%;
    background: #161415 url(../images/header-background.jpg) no-repeat top
      center;
    background-size: cover !important;
    -webkit-background-size: cover !important;
    text-align: center;
    overflow: hidden;
  }

  /* vertically center banner section */
  header:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  header .banner {
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    width: 85%;
    padding-bottom: 30px;
    text-align: center;
  }

  header .banner-text {
    width: 100%;
  }
  header .banner-text h1 {
    font: 90px/1.1em "opensans-bold", sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
  }
  header .banner-text h3 {
    font: 18px/1.9em "librebaskerville-regular", serif;
    color: #a8a8a8;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
  header .banner-text h3 span,
  header .banner-text h3 a {
    color: #fff;
  }
  header .banner-text hr {
    width: 60%;
    margin: 18px auto 24px auto;
    border-color: #2f2d2e;
    border-color: rgba(150, 150, 150, 0.1);
  }

  /* header social links */
  header .social {
    margin: 24px 0;
    padding: 0;
    font-size: 30px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
  }
  header .social li {
    display: inline-block;
    margin: 0 15px;
    padding: 0;
  }
  header .social li a {
    color: #fff;
  }
  header .social li a:hover {
    color: #11abb0;
  }

  /* scrolldown link */
  header .scrolldown a {
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -29px;
    color: #fff;
    display: block;
    height: 42px;
    width: 42px;
    font-size: 42px;
    line-height: 42px;
    color: #fff;
    border-radius: 100%;

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  header .scrolldown a:hover {
    color: #11abb0;
  }

  /* primary navigation
--------------------------------------------------------------------- */
  #nav-wrap ul,
  #nav-wrap li,
  #nav-wrap a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  /* nav-wrap */
  #nav-wrap {
    font: 12px "opensans-bold", sans-serif;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin: 0 auto;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
  }
  .opaque {
    background-color: #333;
  }

  /* hide toggle button */
  #nav-wrap > a.mobile-btn {
    display: none;
  }

  ul#nav {
    min-height: 48px;
    width: auto;

    /* center align the menu */
    text-align: center;
  }
  ul#nav li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
  }

  /* Links */
  ul#nav li a {
    /* 8px padding top + 8px padding bottom + 32px line-height = 48px */

    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    text-align: left;
    color: #fff;

    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }

  ul#nav li a:active {
    background-color: transparent !important;
  }
  ul#nav li.current a {
    color: #f06000;
  }
`;

const GlobalStyle = () => (
  <Global
    styles={css`
      ${resetCss}
      ${defaultStyles}
    `}
  />
);

export default GlobalStyle;
