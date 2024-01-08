import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SecondGrade = () => {
  const [clickedCategory, setIsClickedCategory] = useState(null);

  const onClickGradeCategory = (grade) => {
    const navigate = useNavigate();
    setIsClickedCategory((prevGrade) => (prevGrade === grade ? null : grade));

    switch (grade) {
      case "1학년":
        navigate("check-class/first-grade");
    }
  };
  return (
    <div>
      <div className="SideBarWrap">
        <h1>삑</h1>
        <div
          className={clickedCategory === "1학년" ? "Selected1" : "Grade"}
          onClick={() => onClickGradeCategory("1학년")}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>1학년</span>
        </div>
        <div className="Selected2">
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
