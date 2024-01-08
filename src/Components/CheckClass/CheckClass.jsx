import React, { useState } from "react";
import "./CheckClass.css";
import Side from "../Side/FirstGrade";
import { useNavigate } from "react-router-dom";
const CheckClass = () => {
  const navigate = useNavigate();

  const onClickCheckRoom = () => {
    navigate("/check-room");
  };

  return (
    <div className="ClassCheckWrapper">
      <Side />
      <div className="HeaderBar">
        <span onClick={onClickCheckRoom} className="Room">
          실 조회하기
        </span>
        <span className="Class">학반 조회하기</span>
      </div>
      <div className="Category">
        <div>1반</div>
        <div>2반</div>
        <div>3반</div>
        <div>4반</div>
      </div>
    </div>
  );
};

export default CheckClass;
