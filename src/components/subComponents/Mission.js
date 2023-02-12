import React from "react";
import { MissionWrapper } from "../pages/PagesStyles";

const Mission = () => {
  return (
    <MissionWrapper>
      <div className="box">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>
      <div className="box">
        <h2>Our Vibe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="box">
        <h2>Our Tradition</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
          labore et dolore magna aliqua. quis nostrud exercitation ullamco.
        </p>
      </div>
    </MissionWrapper>
  );
};

export default Mission;
