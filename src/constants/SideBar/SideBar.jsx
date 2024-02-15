import React from "react";
import * as S from "./style/SideBar.style.jsx";
import Header from "../Header/Header.jsx";
import FirstGradeImg from "../../assets/img/1.svg";
import SecondGradeImg from "../../assets/img/2.svg";
import ThirdGradeImg from "../../assets/img/3.svg";
import UseSideBarNavigation from "../../util/SideBar/useSideBarNavigation.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isClickCategory, handleCategoryClick } = UseSideBarNavigation({
    location,
    navigate,
  });

  return (
    <S.SideBarWrap>
      <Header />
      <S.MenuWrap>
        <S.StudentMenu>
          <S.StudentMenuCategories>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("1학년")}
              backgroundColor={isClickCategory === "1학년"}
            >
              <S.GradeImg src={FirstGradeImg} />
              <S.GradeSpan>1학년</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("2학년")}
              backgroundColor={isClickCategory === "2학년"}
            >
              <S.GradeImg src={SecondGradeImg} />
              <S.GradeSpan>2학년</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("3학년")}
              backgroundColor={isClickCategory === "3학년"}
            >
              <S.GradeImg src={ThirdGradeImg} />
              <S.GradeSpan>3학년</S.GradeSpan>
            </S.StudentMenuCategory>
          </S.StudentMenuCategories>
        </S.StudentMenu>
      </S.MenuWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
