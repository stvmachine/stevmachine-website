import { css } from "@emotion/core";

export const ResumeStyles = css`
  background: #fff;
  padding-top: 90px;
  padding-bottom: 72px;
  overflow: hidden;

  a,
  a:visited {
    color: #11abb0;
  }

  a:hover,
  a:focus {
    color: #313131;
  }

  h1 {
    font: 18px/24px "opensans-bold", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 span {
    border-bottom: 3px solid #11abb0;
    padding-bottom: 6px;
  }

  h3 {
    font: 25px/30px "opensans-bold", sans-serif;
  }

  .header-col {
    padding-top: 9px;
  }

  .main-col {
    padding-right: 10%;
  }

  .education,
  .work {
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e8e8;
  }

  .info {
    font: 16px/24px "librebaskerville-italic", serif;
    color: #6e7881;
    margin-bottom: 18px;
    margin-top: 9px;
  }

  .info span {
    margin-right: 5px;
    margin-left: 5px;
  }

  .date {
    font: 15px/24px "opensans-regular", sans-serif;
    margin-top: 6px;
  }

  @media only screen and (max-width: 767px) {
    /* Resume Section
  --------------------------------------------------------------------- */
    #resume .header-col {
      padding-top: 0;
      margin-bottom: 48px;
      text-align: center;
    }
    #resume h1 {
      letter-spacing: 3px;
    }
    #resume .main-col {
      padding-right: 30px;
    }
    #resume h3,
    #resume .info {
      text-align: center;
    }
  }
`;
