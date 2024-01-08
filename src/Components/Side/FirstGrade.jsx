import React, { useState } from "react";
import "../../style/Side.style/Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Side = () => {
  const [clickedCategory, setIsClickedCategory] = useState(null);

  const navigate = useNavigate();

  const onClickGradeCategory = (grade) => {
    setIsClickedCategory((prevGrade) => (prevGrade === grade ? null : grade));

    switch (grade) {
      case "2학년":
        navigate("/check-class/second-grade");
        break;
      case "3학년":
        navigate("/check-class/third-grade");
    }
  };
  return (
    <div>
      <div className="SideBarWrap">
        <h1>삑</h1>
        <div className="Selected1">
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>1학년</span>
        </div>
        <div
          className={clickedCategory === "2학년" ? "Selected2" : "Grade"}
          onClick={() => onClickGradeCategory("2학년")}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>2학년</span>
        </div>
        <div
          className={clickedCategory === "3학년" ? "Selected3" : "Grade"}
          onClick={() => onClickGradeCategory("3학년")}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>3학년</span>
        </div>
      </div>
    </div>
  );
};

export default Side;
