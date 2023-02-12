import React from "react";
import { MemberCardContainer } from "../pages/PagesStyles";

const MembersCard = ({ member }) => {
  return (
    <MemberCardContainer>
      <div className="card__img__cont">
        <img src={member.img} alt="meb" />
      </div>

      <div className="member__card__content">
        <h3>{member.name}</h3>
        <h4>{member.chorale_part}</h4>
        <p>{member.description}</p>
      </div>
    </MemberCardContainer>
  );
};

export default MembersCard;
