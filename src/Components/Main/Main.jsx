import React, { useState } from "react";
import "./Main.css";
import Side from "../Side/Side";
import { useNavigate } from "react-router-dom";
const Bbeep = () => {
  const [isSelectedRoom, setIsSelectedRoom] = useState("");
  const navigate = useNavigate();

  const HandleSearchRoom = (room) => {
    setIsSelectedRoom((prevRoom) => (prevRoom === room ? null : room));

    switch (room) {
      case "실 조회하기":
        navigate("check-room");
        break;
      case "학반 조회하기":
        navigate("check-class");
    }
  };

  return (
    <div className="MainWrapper">
      <Side />
      <div className="HeaderBar">
        <span
          onClick={() => HandleSearchRoom("실 조회하기")}
          className={isSelectedRoom === "실 조회하기" ? "SelectedRoom" : "Room"}
        >
          실 조회하기
        </span>
        <span
          onClick={() => HandleSearchRoom("학반 조회하기")}
          className={isSelectedRoom === "학반 조회하기" ? "SelectedRoom" : "Room"}
        >
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
