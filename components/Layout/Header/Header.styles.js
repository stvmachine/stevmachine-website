import styled from "@emotion/styled";
import Row from "../../Row";

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

export const Banner = styled(Row)`
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
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.85);
  }

  h3 {
    font: 18px/1.9em "librebaskerville-regular", serif;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
    color: #fff;
  }

  h3 span,
  h3 a {
    color: #a8a8a8;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.9);
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

export const ScrollDown = styled.a`
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

  &:hover {
    color: #11abb0;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
