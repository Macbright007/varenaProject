import React from "react";
import { Members } from "../../MembershipJson";
import MembersCard from "../subComponents/MembersCard";
import { MembershipContainer, MembershipWrapper } from "./PagesStyles";

const Membership = () => {
  return (
    <MembershipWrapper>
      <h1>EVERY SONG IS A PAINTING</h1>

      <div className="cont">
        <h3>THE VOCAL ARENA CHORALE MEMBERS</h3>
        <MembershipContainer>
          {Members.map((member) => {
            return <MembersCard member={member} />;
          })}
        </MembershipContainer>
      </div>
    </MembershipWrapper>
  );
};

export default Membership;
