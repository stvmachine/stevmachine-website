import styled from "@emotion/styled";

export const NavWrap = styled.nav`
  ${({ opaque }) => opaque && `background-color: #333;`}
  ${({ show }) =>
    show
      ? `visibility: visible; 
           opacity: 1;`
      : `visibility: hidden;
    opacity: 0;
    transition: visibility 0.4s, opacity 0.4s ease-out;`}      

  font: 12px "opensans-bold", sans-serif;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 0 auto;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;

  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  /* hide toggle button */
  & > a.mobile-btn {
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

  @media only screen and (max-width: 900px) {
    font: 11px "opensans-bold", sans-serif;
    letter-spacing: 1.5px;
  }

  @media only screen and (max-width: 767px) {
    font: 12px "opensans-bold", sans-serif;
    background: transparent !important;
    letter-spacing: 1.5px;

    width: auto;
    position: fixed;
    top: 0;
    right: 0;

    & > a {
      width: 48px;
      height: 48px;
      text-align: left;
      background-color: #cc5200;
      position: relative;
      border: none;
      float: right;

      font: 0/0 a;
      text-shadow: none;
      color: transparent;

      position: relative;
      top: 0px;
      right: 30px;
    }

    & > a:before,
    & > a:after {
      position: absolute;
      border: 2px solid #fff;
      top: 35%;
      left: 25%;
      right: 25%;
      content: "";
    }
    & > a:after {
      top: 60%;
    }

    /* toggle buttons */
    &:not(:target) > a:first-of-type,
    &:target > a:last-of-type {
      display: block;
    }

    /* hide menu panel */
    ul#nav {
      height: auto;
      display: none;
      clear: both;
      width: auto;
      float: right;

      position: relative;
      top: 12px;
      right: 0;
    }

    /* display menu panels */
    &:target > ul#nav {
      display: block;
      padding: 30px 20px 48px 20px;
      background: #1f2024;
      margin: 0 30px;
      clear: both;
    }

    ul#nav li {
      display: block;
      height: auto;
      margin: 0 auto;
      padding: 0 4%;
      text-align: left;
      border-bottom: 1px solid #2d2e34;
      border-bottom-style: dotted;
    }

    ul#nav li a {
      display: block;
      margin: 0;
      padding: 0;
      margin: 12px 0;
      line-height: 16px; /* reset line-height from 48px */
      border: none;
    }
  }

  @media only screen and (max-width: 480px) {
    ul#nav {
      width: auto;
      float: none;
    }
  }
`;
