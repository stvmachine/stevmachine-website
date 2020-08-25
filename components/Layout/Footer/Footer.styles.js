import { css } from "@emotion/core";

export const FooterStyles = css`
  padding-top: 48px;
  margin-bottom: 48px;
  color: #303030;
  font-size: 14px;
  text-align: center;
  position: relative;

  a,
  a:visited {
    color: #525252;
  }

  a:hover,
  a:focus {
    color: #fff;
  }

  .copyright {
    margin: 0;
    padding: 0;
  }

  .copyright li {
    display: inline-block;
    margin: 0;
    padding: 0;
    line-height: 24px;
  }

  .ie .copyright li {
    display: inline;
  }

  .copyright li:before {
    content: "\\2022";
    padding-left: 10px;
    padding-right: 10px;
    color: #095153;
  }

  .copyright li:first-child:before {
    display: none;
  }

  .social-links {
    margin: 18px 0 30px 0;
    padding: 0;
    font-size: 30px;
  }

  .social-links li {
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-left: 42px;
    color: #f06000;
  }

  .social-links li:first-child {
    margin-left: 0;
  }

  /* Go To Top Button */
  #go-top {
    position: absolute;
    top: -24px;
    left: 50%;
    margin-left: -30px;
  }

  #go-top a {
    text-decoration: none;
    border: 0 none;
    display: block;
    width: 60px;
    height: 60px;
    background-color: #525252;

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    color: #fff;
    font-size: 21px;
    line-height: 60px;
    border-radius: 100%;
  }

  #go-top a:hover {
    background-color: #0f9095;
  }

  @media only screen and (max-width: 767px) {
    /* copyright */
    .copyright li:before {
      content: none;
    }
    .copyright li {
      margin-right: 12px;
    }

    /* social links */
    .social-links {
      font-size: 22px;
    }
    .social-links li {
      margin-left: 18px;
    }

    /* Go To Top Button */
    #go-top {
      margin-left: -22px;
    }
    #go-top a {
      width: 54px;
      height: 54px;
      font-size: 18px;
      line-height: 54px;
    }
  }

  @media only screen and (max-width: 480px) {
    /* social links */
    .social-links {
      font-size: 20px;
    }

    .social-links li {
      margin-left: 14px;
    }
  }
`;
