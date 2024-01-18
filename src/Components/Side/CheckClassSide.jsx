import React, { useEffect, useState } from "react";
import "../../style/Side.style/CheckClass.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSchool, faDumbbell, faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
const CheckClassSide = () => {
  const [clickedCategory, setIsClickedCategory] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/lab-class":
        setIsClickedCategory("실습동");
        break;
      case "/main-class":
        setIsClickedCategory("본관 1층");
        break;
      case "/exercise-class":
        setIsClickedCategory("강당");
        break;
      case "/special-class":
        setIsClickedCategory("별관");
        break;
      default:
        setIsClickedCategory(null);
    }
  }, [location.pathname]);

  const onClickGradeCategory = (grade) => {
    setIsClickedCategory((prevGrade) => (prevGrade === grade ? null : grade));

    switch (grade) {
      case "실습동":
        navigate("/lab-class");
        break;
      case "본관 1층":
        navigate("/main-class");
        break;
      case "강당":
        navigate("/exercise-class");
        break;
      case "별관":
        navigate("/special-class");
        break;
      default:
        navigate(null);
    }
  };

  const onClickNavigateMain = () => {
    navigate("/main");
  };

  return (
    <div>
      <div className="ClassSideBarWrap">
        <h1 onClick={onClickNavigateMain}>삑</h1>
        <div
          className={clickedCategory === "실습동" ? "Selected1" : "Class"}
          onClick={() => onClickGradeCategory("실습동")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faCode} color="white" className="icon" />
          <span>실습동</span>
        </div>
        <div
          className={clickedCategory === "본관 1층" ? "Selected2" : "Class"}
          onClick={() => onClickGradeCategory("본관 1층")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faSchool} color="white" className="icon" />
          <span>본관 1층</span>
        </div>
        <div
          className={clickedCategory === "강당" ? "Selected3" : "Class"}
          onClick={() => onClickGradeCategory("강당")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faDumbbell} color="white" className="icon" />
          <span>강당</span>
        </div>
        <div
          className={clickedCategory === "별관" ? "Selected4" : "Class"}
          onClick={() => onClickGradeCategory("별관")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faStar} color="white" className="icon" />
          <span>별관</span>
        </div>
        <button className="ShowChatBtn">메시지 보기</button>
      </div>
    </div>
  );
};

export default CheckClassSide;
