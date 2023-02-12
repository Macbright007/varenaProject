import React from "react";
import { Box, BoxWrapper, LeadershipContainer } from "../pages/PagesStyles";
import mcord from "../../images/Mcord.svg"
import President from "../../images/president.svg"
import vice from "../../images/vice.svg"


const Leadership = () => {
  return (
    <LeadershipContainer>
      <h1>Leadership</h1>

     <BoxWrapper>
     <Box>
        <div className="image-container">
          <img src={mcord} alt="leaders" />
        </div>

        <div className="details">
          <h2>Seyanu Davies</h2>
          <h5>Coordinator VCRT</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
          labore et dolore magna aliqua
        </p>
      </Box>
      <Box>
        <div className="image-container">
          <img src={President} alt="leaders" />
        </div>

        <div className="details">
          <h2>Mr Pen</h2>
          <h5>President VCRT</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
          labore et dolore magna aliqua
        </p>
      </Box>
      <Box>
        <div className="image-container">
          <img src={vice} alt="leaders" />
        </div>

        <div className="details">
          <h2>Miss Purity</h2>
          <h5>Vice President VCRT</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
          labore et dolore magna aliqua
        </p>
      </Box>
     </BoxWrapper>
    </LeadershipContainer>
  );
};

export default Leadership;
