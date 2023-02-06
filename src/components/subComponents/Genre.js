import React from "react";
import { CiSearch } from "react-icons/ci";
import { GenreContainer, GenreContent } from "../pages/PagesStyles";
import dance from "../../images/dance.svg"


const Genre = () => {
  return (
    <GenreContainer>
      <div className="input__container">
        <input type="search" placeholder="Genre" />
        <CiSearch className="search__icon" />
      </div>

      <GenreContent>
        <div className="image__container">
          <img src={dance} alt="pic" />
        </div>
          <p>
            In theory, "music history" could refer to the study of the history
            of any type or genre of music (e.g., the history of Indian music or
            the history of rock). In practice, these research topics are often
            categorized as part of ethnomusicology or cultural studies, whether
            or not they are ethnographically based.In theory, "music history"
            could refer to the study of the history of any type or genre of
            music (e.g., the history of Indian music or the history of rock).
          </p>
      </GenreContent>
    </GenreContainer>
  );
};

export default Genre;
