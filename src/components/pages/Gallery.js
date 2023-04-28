import React from "react";
import imt from "../../images/Frame 132.svg";
import imt1 from "../../images/Group 67.svg";
import imt2 from "../../images/Group 68.svg";
import imt3 from "../../images/Group 69.svg";
import imt4 from "../../images/Frame 140.svg";
import imt5 from "../../images/Frame 133.svg";
import imt6 from "../../images/Group 70.svg";
import imt7 from "../../images/Frame 135.svg";
import imt8 from "../../images/Frame 137.svg";
import imt9 from "../../images/Frame 136.svg";
import imt10 from "../../images/Group 71.svg";
import imt11 from "../../images/Group 116.svg";
import imt12 from "../../images/Group 72.svg";
import imt13 from "../../images/Frame 138.svg";
import imt14 from "../../images/Group 115.svg";
import imt15 from "../../images/Frame 139.svg";
import { GalleryContainer } from "./PagesStyles";

const Gallery = () => {
  return (
    <GalleryContainer>
      <h1>Gallery</h1>
      <div class="row">
        <div class="column">
          <img src={imt} alt="immm" />
          <img src={imt1} alt="immm" />
          <img src={imt2} alt="immm" />
          <img src={imt3} alt="immm" />
          <img src={imt4} alt="immm" />
        </div>
        <div class="column">
          <img src={imt5} alt="immm" />
          <img src={imt6} alt="immm" />
          <img src={imt7} alt="immm" />
        </div>
        <div class="column">
          <img src={imt8} alt="immm" />
          <img src={imt9} alt="immm" />
          <img src={imt10} alt="immm" />
          <img src={imt11} alt="immm" />
        </div>
        <div class="column">
          <img src={imt12} alt="immm" />
          <img src={imt13} alt="immm" />
          <img src={imt14} alt="immm" />
          <img src={imt15} alt="immm" />
        </div>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;
