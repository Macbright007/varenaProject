import React from "react";
import { AboutContent, AboutWrapper } from "./PagesStyles";
import teamm from "../../images/teamm.svg";

const About = () => {
  return (
    <AboutWrapper>
      <div className="top__content">
        <h1>MAKING MUSIC BETTER FOR EVERYONE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <AboutContent>
        <div className="middle__content">
          <h5>OUR PEOPLE</h5>
          <h2>Creating Musical Impact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="img__Container">
          <img src={teamm} alt="team" />
        </div>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
