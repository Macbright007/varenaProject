import styled from "styled-components";

// styling for home page
export const TrendCont = styled.section`
  //   border: 2px solid black;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  position: relative;
`;

export const InputCont = styled.form`
  //   border: 2px solid blue;
  width: 50%;
  margin: auto;
  padding: 15px 50px;
  background: #1c1c1c;
  // background: transparent;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: absolute;
  top: -50px;
  left: 310px;
  display: flex;

  input[type="search"] {
    border: 2px solid #fff;
    background: transparent;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    padding: 7px 0px;
    width: 100%;
    color: white;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #d9d9d9;
  }

  .search__icon {
    color: #fff;
    font-size: 22px;
    margin-left: -30px;
    font-weight: 700;
  }
`;

export const CardContainer = styled.div`
  //   border: 2px solid black;
  margin: 4rem 0px;
  display: flex;
  justify-content: space-evenly;
`;
export const Card = styled.div`
  //   border: 2px solid red;
  width: 270px;
  height: 45vh;
  background: #1c1c1c;
  border-radius: 10px;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  //   border: 2px solid #fff;
  width: 90%;
  margin: 10px auto;

  p {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.001em;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.001em;
    color: #fff;
  }

  .content__footer {
    display: flex;
    justify-content: space-between;
  }
  .content__footer h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #e67f1a;
  }
`;

export const GenreContainer = styled.section`
  //   border: 2px solid red;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 10px;

  .input__container {
    width: 95%;
    margin: auto;
    padding: 15px 50px;
    background: #1c1c1c;
    // background: transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
  }

  .input__container input[type="search"] {
    border: 2px solid #fff;
    background: transparent;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    padding: 7px 0px;
    width: 100%;
    color: white;
  }
  .input__container input:focus {
    outline: none;
  }
  .input__container input::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #d9d9d9;
  }

  .search__icon {
    color: #fff;
    font-size: 22px;
    margin-left: -30px;
    font-weight: 700;
  }
`;

export const GenreContent = styled.div`
  //   border: 2px solid red;
  display: flex;
  //   justify-content: space-between;
  padding: 30px;

  .image__container {
    // border: 2px solid blue;
    margin-top: 3rem;
    width: 45%;
    // height: 40vh;
  }

  .image__container img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }

  p {
    width: 40%;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: left;
    letter-spacing: 0.001em;
    color: #fff;
    // color: #000;
    margin-left: 3rem;
  }
`;

// styles for About Page

export const AboutWrapper = styled.section`
//   border: 2px solid black;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 10px;

  .top__content {
    // border: 2px solid red;
    width: 70%;
    margin: 5rem auto;
  }

  .top__content h1 {
    font-weight: 900;
    font-size: 57px;
    line-height: 64px;
    display: flex;
    align-items: center;
    text-align: center;
    // color: #000;
    color: #fff;
  }

  .top__content p {
    width: 68%;
    margin: 0.8rem auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0015em;
    // color: #000;
    color: #fff;
  }
`;

export const AboutContent = styled.div`
//   border: 2px solid blue;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  display: flex;

  .middle__content {
    width: 55%;
    padding: 3rem;
    background: #fff;
    border-radius: 10px;
    // border: 2px solid green;
  }

  .middle__content h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1c1c1c;
  }

  .middle__content h2 {
    width: 50%;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #1c1c1c;
  }

  .middle__content p {
    width: 83%;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: 0.001em;
    color: #1c1c1c;
    margin-top: 1rem;
  }

  .img__Container img {
    // border: 2px solid black;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
    margin-left: -6rem;
    margin-top: 2rem;
  }
`;
