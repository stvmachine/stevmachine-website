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
  }
`;

export const MobileMenuBtn = styled(styled.a)`
  display: none;

  @media only screen and (max-width: 767px) {
    width: 48px;
    height: 48px;
    text-align: left;
    background-color: #cc5200;
    position: relative;
    border: none;
    float: right;
    display: block;

    font: 0/0 a;
    text-shadow: none;
    color: transparent;

    position: relative;
    top: 0px;
    right: 30px;

    &:before,
    &:after {
      position: absolute;
      border: 2px solid #fff;
      top: 35%;
      left: 25%;
      right: 25%;
      content: "";
    }
    &:after {
      top: 60%;
    }
  }
`;

export const NavMenu = styled.ul`
  min-height: 48px;
  width: auto;
  text-align: center;

  li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
  }

  /* Links */
  li a {
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

  li a:active {
    background-color: transparent !important;
  }

  li.current a {
    color: #f06000;
  }

  @media only screen and (max-width: 767px) {
    height: auto;
    display: none;
    clear: both;
    width: auto;
    float: right;

    position: relative;
    top: 12px;
    right: 0;

    /* display menu panels */
    ${({ show }) =>
      show &&
      `
      display: flex;
      flex-direction: column;
      padding: 30px 20px 48px 20px !important;
      background: #1f2024;
      margin: 0 30px !important;
  `}

    li {
      display: block;
      height: auto;
      padding: 0 4%;
      text-align: left;
      border-bottom: 1px solid #2d2e34;
      border-bottom-style: dotted;
    }
  }

  @media only screen and (max-width: 480px) {
    width: auto;
    float: none;
  }
`;
