import React, { useEffect, useState } from "react";
import "../../style/Side.style/Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
const Side = () => {
  const [clickedCategory, setIsClickedCategory] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/first-grade":
        setIsClickedCategory("1학년");
        break;
      case "/second-grade":
        setIsClickedCategory("2학년");
        break;
      case "/third-grade":
        setIsClickedCategory("3학년");
        break;
      default:
        setIsClickedCategory(null);
    }
  }, [location.pathname]);

  const onClickGradeCategory = (grade) => {
    setIsClickedCategory((prevGrade) => (prevGrade === grade ? null : grade));

    switch (grade) {
      case "1학년":
        navigate("/first-grade");
        break;
      case "2학년":
        navigate("/second-grade");
        break;
      case "3학년":
        navigate("/third-grade");
        break;
      default:
        navigate("");
    }
  };

  const onClickNavigateMain = () => {
    navigate("/main");
  };

  return (
    <div>
      <div className="GradeSideBarWrap">
        <h1 onClick={onClickNavigateMain}>삑</h1>
        <div
          className={clickedCategory === "1학년" ? "Selected1" : "Grade"}
          onClick={() => onClickGradeCategory("1학년")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>1학년</span>
        </div>
        <div
          className={clickedCategory === "2학년" ? "Selected2" : "Grade"}
          onClick={() => onClickGradeCategory("2학년")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>2학년</span>
        </div>
        <div
          className={clickedCategory === "3학년" ? "Selected3" : "Grade"}
          onClick={() => onClickGradeCategory("3학년")}
          onDoubleClick={() => navigate("/main")}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>3학년</span>
        </div>
        <button className="ShowChatBtn">메시지 보기</button>
      </div>
    </div>
  );
};

export default Side;
