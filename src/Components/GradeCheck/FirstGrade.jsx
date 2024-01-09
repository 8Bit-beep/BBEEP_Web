import React, { useState } from "react";
import Side from "../Side/Side";
import "../../style/Grade.style/FirstGrade.css";
import { useNavigate } from "react-router-dom";
const FirstGrade = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const navigate = useNavigate();

  const onClickCheckRoom = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "실 조회하기":
        navigate("check-room");
        break;
      case "학반 조회하기":
        navigate("check-class");
        break;
    }
  };

  return (
    <div className="ClassCheckWrapper">
      <Side />
      <div className="HeaderBar">
        <span
          onClick={() => onClickCheckRoom("실 조회하기")}
          className={isClickedCheck === "실 조회하기" ? "Room" : "NoneClick"}
        >
          실 조회하기
        </span>
        <span onClick={() => onClickCheckRoom("학반 조회하기")} className="ClassSelected">
          학반 조회하기
        </span>
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

export default FirstGrade;
