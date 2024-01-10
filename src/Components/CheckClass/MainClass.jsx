import React, { useState } from "react";
import "../../style/Class.style/MainClass.css";
import CheckClassSide from "../Side/CheckClassSide";
import { useNavigate } from "react-router-dom";
const MainClass = () => {
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
      <div className="MainLabCategory">
        <div>보건실</div>
        <div>위클래스</div>
        <div>야외음악당</div>
        <div>도서관</div>
        <div>산학실</div>
        <div>음악실</div>
      </div>
    </div>
  );
};

export default MainClass;
