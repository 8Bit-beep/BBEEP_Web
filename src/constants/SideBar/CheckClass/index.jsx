import React from "react";
import UseSideBarNavigation from "../../../util/SideBar/useSideBarNavigation";
import * as S from "../style/SideBar.style";
import Header from "../../Header/Header";
import FirstGradeImg from "../../../assets/img/1.svg";
import SecondGradeImg from "../../../assets/img/2.svg";
import ThirdGradeImg from "../../../assets/img/3.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ClassSideBar = () => {
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
              onClick={() => handleCategoryClick("1층")}
              backgroundColor={isClickCategory === "1층"}
            >
              <S.GradeImg src={FirstGradeImg} />
              <S.GradeSpan>1층</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("2층")}
              backgroundColor={isClickCategory === "2층"}
            >
              <S.GradeImg src={SecondGradeImg} />
              <S.GradeSpan>2층</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("3층")}
              backgroundColor={isClickCategory === "3층"}
            >
              <S.GradeImg src={ThirdGradeImg} />
              <S.GradeSpan>3층</S.GradeSpan>
            </S.StudentMenuCategory>
          </S.StudentMenuCategories>
        </S.StudentMenu>
      </S.MenuWrap>
    </S.SideBarWrap>
  );
};

export default ClassSideBar;
