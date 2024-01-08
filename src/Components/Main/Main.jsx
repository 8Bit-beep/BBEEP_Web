import React, { useState } from "react";
import "./Main.css";
import Side from "../Side/Side";
import { useNavigate } from "react-router-dom";
const Bbeep = () => {
  const navigate = useNavigate();
  let toggle;
  const HandleSearchRoom = () => {
    let Room = document.getElementById("RoomCheck");
    let Class = document.getElementById("ClassCheck");

    if (!toggle) {
      Room.style.color = "blue";
      Class.style.color = "black";
      toggle = true;
    } else {
      Class.style.color = "blue";
      Room.style.color = "black";
      toggle = false;
    }
  };

  const HandleTouchGrade = () => {
    let Hi;
  };

  return (
    <div className="MainWrapper">
      <Side />
      <div className="HeaderBar">
        <span id="RoomCheck" onClick={HandleSearchRoom} className="first">
          실 조회하기
        </span>
        <span id="ClassCheck" onClick={HandleSearchRoom}>
          학반 조회하기
        </span>
      </div>
      <div className="Main">
        <div>1반</div>
        <div>2반</div>
        <div>3반</div>
        <div>4반</div>
      </div>
    </div>
  );
};

export default Bbeep;
