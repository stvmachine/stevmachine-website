import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const Wrapper = styled.header`
  position: relative;
  height: 800px;
  min-height: 500px;
  width: 100%;
  background: #161415 url(/images/header-background.jpg) no-repeat top center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  text-align: center;
  overflow: hidden;

  /* vertically center banner section */
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

export const Banner = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  width: 85%;
  padding-bottom: 30px;
  text-align: center;

  @media only screen and (max-width: 900px) {
    padding-bottom: 12px;
  }
  @media only screen and (max-width: 767px) {
    padding-bottom: 12px;
    padding-top: 6px;
  }

  @media only screen and (max-width: 480px) {
    padding-top: 24px;
  }
`;

export const BannerText = styled.div`
  width: 100%;
  h1 {
    font: 90px/1.1em "opensans-bold", sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
  }

  h3 {
    font: 18px/1.9em "librebaskerville-regular", serif;
    color: #a8a8a8;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  }

  h3 span,
  h3 a {
    color: #fff;
  }

  hr {
    width: 60%;
    margin: 18px auto 24px auto;
    border-color: #2f2d2e;
    border-color: rgba(150, 150, 150, 0.1);
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font: 80px/1.1em "opensans-bold", sans-serif;
      letter-spacing: -1px;
      margin: 0 auto 12px auto;
    }
  }

  /* screenwidth less than 900px
--------------------------------------------------------------------- */
  @media only screen and (max-width: 900px) {
    /* header styles
   ------------------------------------------------------------------ */
    h1 {
      font: 78px/1.1em "opensans-bold", sans-serif;
      letter-spacing: -1px;
    }
    h3 {
      font: 17px/1.9em "librebaskerville-regular", serif;
      width: 80%;
    }
    hr {
      width: 65%;
      margin: 12px auto;
    }
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font: 68px/1.1em "opensans-bold", sans-serif;
    }
    h3 {
      font: 16px/1.9em "librebaskerville-regular", serif;
      width: 85%;
    }
    hr {
      width: 80%;
      margin: 18px auto;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font: 40px/1.1em "opensans-bold", sans-serif;
      margin: 0 auto 24px auto;
    }

    h3 {
      font: 14px/1.9em "librebaskerville-regular", sans-serif;
      width: 90%;
    }
  }
`;

export const SocialList = styled.ul`
  /* header social links */
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);

  li {
    display: inline-block;
    margin: 0 15px;
    padding: 0;
  }

  li a {
    color: #fff;
  }

  li a:hover {
    color: #11abb0;
  }

  @media only screen and (max-width: 767px) {
    margin: 18px 0 24px 0;
    font-size: 24px;
    line-height: 36px;
    li {
      margin: 0 10px;
    }
  }

  @media only screen and (max-width: 480px) {
    font-size: 20px;

    li {
      margin: 0 6px;
    }
  }
`;

export const HeaderStyles = css`
  /* scrolldown link */
  .scrolldown a {
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

  .scrolldown a:hover {
    color: #11abb0;
  }

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


  /* screenwidth less than 900px
--------------------------------------------------------------------- */
  @media only screen and (max-width: 900px) {
    /* header styles
   ------------------------------------------------------------------ */
   
    /* nav-wrap */
    #nav-wrap {
      font: 11px "opensans-bold", sans-serif;
      letter-spacing: 1.5px;
    }
  }

  /* mobile wide/smaller tablets
---------------------------------------------------------------------- */

  @media only screen and (max-width: 767px) {
    /* mobile navigation
   -------------------------------------------------------------------- */
    #nav-wrap {
      font: 12px "opensans-bold", sans-serif;
      background: transparent !important;
      letter-spacing: 1.5px;import { styled } from '@emotion/styled';

      width: auto;
      position: fixed;
      top: 0;
      right: 0;
    }
    #nav-wrap > a {
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

    #nav-wrap > a:before,
    #nav-wrap > a:after {
      position: absolute;
      border: 2px solid #fff;
      top: 35%;
      left: 25%;
      right: 25%;
      content: "";
    }
    #nav-wrap > a:after {
      top: 60%;
    }

    /* toggle buttons */
    #nav-wrap:not(:target) > a:first-of-type,
    #nav-wrap:target > a:last-of-type {
      display: block;
    }

    /* hide menu panel */
    #nav-wrap ul#nav {
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
    #nav-wrap:target > ul#nav {
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

    /* Header Styles
   -------------------------------------------------------------------- */
    
    /* scrolldown link */
    .scrolldown {
      display: none;
    }
  }

  /* mobile narrow
  -------------------------------------------------------------------------- */

  @media only screen and (max-width: 480px) {
    /* mobile navigation
   -------------------------------------------------------------------- */
    #nav-wrap ul#nav {
      width: auto;
      float: none;
    }
  }
`;
