import React, { useState } from "react";
<<<<<<< Updated upstream

const Bbeep = () => {
  let toggle;
  const HandleSearchRoom = () => {
    let Room = document.getElementById("roomcheck");
    let Class = document.getElementById("classcheck");

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
    <div>
      <div className="header-bar">
        <span id="roomcheck" onClick={HandleSearchRoom} className="first">
          실 조회하기
        </span>
        <span id="classcheck" onClick={HandleSearchRoom}>
          학반 조회하기
        </span>
      </div>

=======
import "./Main.css";
import Side from "../side/side";
const Bbeep = () => {
  const [selectedRoom, setSelectedRoom] = useState(false);

  const onClickCheckRoom = (room) => {
    setSelectedRoom((prevRoom) => (prevRoom === room ? null : room));
  };

  return (
    <div>
        <Side />
      <div className="header-bar">
        <span
          onClick={() => onClickCheckRoom("실 조회하기")}
          className={selectedRoom === "실 조회하기" ? "selectedRoom" : "room"}
        >
          실 조회하기
        </span>
        <span
          onClick={() => onClickCheckRoom("학반 조회하기")}
          className={selectedRoom === "학반 조회하기" ? "selectedRoom" : "room"}
        >
          학반 조회하기
        </span>
      </div>
>>>>>>> Stashed changes
      <div className="main">
        <div>1반</div>
        <div>2반</div>
        <div>3반</div>
        <div>4반</div>
      </div>
    </div>
  );
};

export default Bbeep;
