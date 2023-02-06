import React from "react";
import Banner from "../layout/Banner";
import Genre from "../subComponents/Genre";
import Music from "../subComponents/Music";
// import Main from '../layout/Main'
import Trending from "../subComponents/Trending";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Genre />
      <Music />
    </div>
  );
};

export default Home;
