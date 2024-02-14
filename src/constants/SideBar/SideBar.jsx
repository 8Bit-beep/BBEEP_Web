import React from "react";
import * as S from "./style/SideBar.style.jsx";
import Header from "../Header/Header.jsx";
import StudentMenuTitleImg from "../../assets/img/StudentMenuTitleImg.png";
import DropDownButtonImg from "../../assets/img/DropDownButtonImg.png";
import FirstGradeImg from "../../assets/img/1.svg";
import SecondGradeImg from "../../assets/img/2.svg";
import ThirdGradeImg from "../../assets/img/3.svg";
import LabMenuTitleImg from "../../assets/img/LabMenuTitleImg.png";
import LabClassImg from "../../assets/img/experiment.svg";
import ProjectImg from "../../assets/img/tactic.svg";
import UseSideBarNavigation from "../../lib/SideBar/useSideBarNavigation.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleCategoryClick, selectedGrade, handleGradeClick } = UseSideBarNavigation({
    location,
    navigate,
  });

  return (
    <S.SideBarWrap>
      <Header />
      <S.MenuWrap>
        <S.StudentMenu>
          <S.StudentMenuTitle>
            <S.StudentTitleImg src={StudentMenuTitleImg} />
            <S.StudentMenuSpan onClick={() => handleCategoryClick("학생 조회하기")}>학생 조회하기</S.StudentMenuSpan>
            <S.DropDownButtonImg src={DropDownButtonImg} />
          </S.StudentMenuTitle>
          <S.StudentMenuCategories>
            <S.StudentMenuCategory
              onClick={() => handleGradeClick("1학년")}
              backgroundColor={selectedGrade === "1학년"}
            >
              <S.GradeImg src={FirstGradeImg} />
              <S.GradeSpan>1학년</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleGradeClick("2학년")}
              backgroundColor={selectedGrade === "2학년"}
            >
              <S.GradeImg src={SecondGradeImg} />
              <S.GradeSpan>2학년</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleGradeClick("3학년")}
              backgroundColor={selectedGrade === "3학년"}
            >
              <S.GradeImg src={ThirdGradeImg} />
              <S.GradeSpan>3학년</S.GradeSpan>
            </S.StudentMenuCategory>
          </S.StudentMenuCategories>
        </S.StudentMenu>
        <S.LabMenu>
          <S.LabMenuTitle>
            <S.LabTitleImg src={LabMenuTitleImg} />
            <S.LabMenuSpan onClick={() => handleCategoryClick("실 조회하기")}>실 조회하기</S.LabMenuSpan>
            <S.DropDownButtonImg src={DropDownButtonImg} />
          </S.LabMenuTitle>
          <S.LabMenuCategories>
            <S.LabMenuCategory>
              <S.LabImg src={ProjectImg} />
              <S.LabSpan>프로젝트 실</S.LabSpan>
            </S.LabMenuCategory>
            <S.LabMenuCategory>
              <S.LabImg src={LabClassImg} />
              <S.LabSpan>LAB 실</S.LabSpan>
            </S.LabMenuCategory>
          </S.LabMenuCategories>
        </S.LabMenu>
      </S.MenuWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
