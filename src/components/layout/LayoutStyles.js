import styled from "styled-components";

// styling for main
export const MainContainer = styled.div`
  // border: 2px solid blue;
  background: #0D0D0D; 
`

// styling for navbar
export const NavWrapper = styled.div`
  // border: 2px solid black;
  background-color: #0d0d0d;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .nav__right {
    // border: 2px solid green;
    display: flex;
    margin-top: 6px;
  }

  .btn__btn {
    // border: 2px solid red;
    margin-top: 1px;
  }

  .btn__btn a button {
    margin-left: 10px;
    padding: 5px 35px;
    background: #019ee4;
    border-radius: 3px;
    color: #fff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
  }

  .btn__btn a button:nth-child(1) {
    border: 1px solid #019ee4;
    background-color: transparent;
    color: #019ee4;
  }
`;

export const NavItems = styled.div`
  // border: 2px solid blue;
  margin-top: 12px;

  a {
    margin: 0 20px;
    color: #fff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
  }

  a:nth-child(1) {
    color: #e67f1a;
  }
`;

// styling for banner
export const BannerWrapper = styled.div`
  //   border: 2px solid red;
  padding: 20px;
  text-align: center;
  height: 80vh;

  h2 {
    width: 50%;
    margin: auto;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 900;
    font-size: 3.7rem;
    line-height: 64px;
    text-transform: uppercase;
    color: #000;
  }

  p {
    font-family: "Esteban";
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    color:  #e67f1a;
    letter-spacing: 5px;
    margin-top: -.5rem;
    // line-height: 24px;
  }
`;
