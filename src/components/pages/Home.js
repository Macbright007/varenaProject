import React from "react";
import Banner from "../layout/Banner";
import Genre from "../subComponents/Genre";
import Music from "../subComponents/Music";
// import Main from '../layout/Main'
import Trending from "../subComponents/Trending";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Genre />
      <Music />
      <Gallery />
    </div>
  );
};

export default Home;
