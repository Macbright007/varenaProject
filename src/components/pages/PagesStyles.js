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
  // border: 2px solid blue;
  margin: 4rem 0px;
  display: flex;
  justify-content: space-evenly;
`;
export const Card = styled.div`
  // border: 2px solid red;
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
    width: 65%;
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
  padding: 2rem;
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

// style for mission

export const MissionWrapper = styled.section`
  //   border: 2px solid green;
  display: flex;
  justify-content: space-evenly;
  padding: 4rem;
  margin-top: 7rem;
  background: #313131;
  border-radius: 10px;

  .box {
    // border: 2px solid blue;
    width: 30%;
    height: 15vh;
  }
  .box h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .box p {
    font-family: "Esteban";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0015em;
    color: #fff;
  }
`;

// style for Leadership
export const LeadershipContainer = styled.section`
  border: 2px solid red;
  padding: 2rem;
  height: 85vh;
  margin-top: 1rem;
  margin-bottom: 7rem;
  background: #313131;
  border-radius: 10px;

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
`;

export const BoxWrapper = styled.div`
  //   border: 2px solid black;
  display: flex;
  justify-content: space-evenly;
  height: 45vh;
  padding: 2rem;
  margin-top: 1rem;
`;

export const Box = styled.div`
  // border: 2px solid blue;
  width: 26%;
  height: 27vh;

  .image-container {
    border: 2px solid yellow;
    border-radius: 100%;
    width: 160px;
    height: 160px;
    margin: 1rem auto;
  }

  .image-container img {
    width: 100%;
    height: 100%;
  }
  p {
    font-family: "Esteban";
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0015em;
    color: #fff;
    padding-top: 10px;
  }

  .details {
    text-align: center;
  }

  .details h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 40px;
    color: #fff;
  }

  .details h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }
`;

// styling for contact page

export const ContactWrapper = styled.section`
  border: 2px solid black;
  //   background: white;
  width: 100%;
  max-width: 1300px;
  margin: 10rem auto;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  //   height: calc(100% - 20px);

  .left__side {
    // border: 2px solid red;
  }

  .left__side h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .left__side h1 {
    font-weight: 900;
    font-size: 57px;
    line-height: 64px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 2rem 0;
    color: #fff;
  }

  .left__side p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0015em;
    color: #f9dedc;
  }
`;

export const FormWrapper = styled.form`
  //   border: 2px solid blue;
  width: 50%;
  height: 30vh;

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin: 1.3rem 0;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0015em;
    color: #fff;
  }

  .holder {
    // border: 2px solid red;
    width: 100%;
  }

  .holder input[type="text"] {
    width: 100%;
    padding: 1.7rem 0;
    // border: 3px solid white;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: transparent;
    color: #fff;
  }
  .holder input[type="email"] {
    width: 100%;
    padding: 1.7rem 0;
    background-color: transparent;
    // border: 3px solid white;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    color: #fff;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;
    color: smokewhite;
  }

  button {
    border: none;
    padding: 6px 41px;
    background: #ffebd8;
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0015em;
    color: #e67f1a;
  }
`;

// styles for membership page

export const MembershipWrapper = styled.section`
  //   border: 2px solid white;

  h1 {
    width: 40%;
    margin: 2rem auto;
    font-weight: 900;
    font-size: 2.8rem;
    line-height: 64px;
    // display: flex;
    // align-items: center;
    text-align: center;
    color: #fff;
  }

  .cont {
    // border: 2px solid white;
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto;
    padding: 4rem;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }

  .cont > h3 {
    font-weight: 900;
    font-size: 24px;
    line-height: 64px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
  }
`;

export const MembershipContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
`;

export const MemberCardContainer = styled.div`
  background: #1c1c1c;
  border-radius: 10px;
  height: 53vh;

  .card__img__cont {
    // border: 2px solid blue;
    border-radius: 10px;
    height: 35vh;
  }
  .card__img__cont img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    object-fit: cover;
  }

  .member__card__content{
    padding: 7px;
  }
  .member__card__content h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.001em;
    color: #fff;
  }

  .member__card__content h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.001em;
    color: #e67f1a;
  }

  .member__card__content p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;
    color: #fff;
    width: 238px;
  }
`;
