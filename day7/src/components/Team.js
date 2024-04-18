import React from "react";
import "./Team.css";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpeg";

const Team = () => {
  return (
    <>
    <h3 className="heading3">Our Teams</h3>
    <div className="teams">
        <div className="row1">
          <div className="teamMembers">
            <img src={team1}></img>
            <h3>SARA JOHNSON</h3>
            <p>Creative Head</p>
          </div>
          <div className="teamMembers">
            <img src={team2}></img>
            <h3>SARA JOHNSON</h3>
            <p>Creative Head</p>
          </div>
          <div className="teamMembers">
            <img src={team3}></img>
            <h3>SARA JOHNSON</h3>
            <p>Creative Head</p>
          </div>
        </div>

        <div className="row2">
          <div className="teamMembers">
            <img src={team2}></img>
            <h3>SARA JOHNSON</h3>
            <p>Creative Head</p>
          </div>
          <div className="teamMembers">
            <img src={team3}></img>
            <h3>SARA JOHNSON</h3>
            <p>Creative Head</p>
          </div>
          <div className="teamMembers">
            <img src={team1}></img>
            <h3>SARA JOHNSON</h3>
            <p>Creative Head</p>
          </div>
        </div>
    </div>
    </>
  );
};

export default Team;
