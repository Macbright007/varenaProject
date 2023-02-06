import React from "react";
import { Card, Content } from "../pages/PagesStyles";
import {TbGridDots} from "react-icons/tb"

const SongCard = ({ song }) => {
  return (
    <Card>
      <img src={song.img} alt="song" />

      <Content>
        <p>{song.genre}</p>
        <h3>{song.title}</h3>
        <div className="content__footer">
          <h4>{song.author}</h4>
          <TbGridDots style={{color: "#fff", fontSize: "23px"}}/>
        </div>
      </Content>
    </Card>
  );
};

export default SongCard;
