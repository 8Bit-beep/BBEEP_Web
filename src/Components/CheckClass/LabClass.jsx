import React, { useState } from "react";
import "../../style/Class.style/Class.css";
import CheckClassSide from "../Side/CheckClassSide";
import { useNavigate } from "react-router-dom";

const LabClass = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);

  const navigate = useNavigate();

  const onClickCheckRoom = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "학반 조회하기":
        navigate("/first-grade");
        break;
    }
  };

  return (
    <div className="ClassCheckWrapper">
      <CheckClassSide />
      <div className="HeaderBar">
        <span onClick={() => onClickCheckRoom("실 조회하기")} className="Room">
          실 조회하기
        </span>
        <span
          onClick={() => onClickCheckRoom("학반 조회하기")}
          className={isClickedCheck === "학반 조회하기" ? "Room" : "NoneClick"}
        >
          학반 조회하기
        </span>
      </div>
      <div className="LabCategory">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LabClass;
