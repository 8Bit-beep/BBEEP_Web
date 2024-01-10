import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Side from "../Side/Side";
import "../../style/Main.style/Main.css";
const Main = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const navigate = useNavigate();
  const onClickCheck = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "실 조회하기":
        navigate("/lab-class");
        break;
      case "학반 조회하기":
        navigate("/first-grade");
        break;
    }
  };

  return (
    <div className="ClassCheckWrapper">
      <Side />
      <div className="HeaderBar">
        <span className="RoomNoneClick" onClick={() => onClickCheck("실 조회하기")}>
          실 조회하기
        </span>
        <span className="ClassNoneClick" onClick={() => onClickCheck("학반 조회하기")}>
          학반 조회하기
        </span>
      </div>
      <div className="Category"></div>
    </div>
  );
};

export default Main;
