import React from "react";
import SideBar from "../../constants/SideBar/CheckStudent/SideBar";
import * as S from "../style/CheckStudent.style";
import ClassOne from "../../assets/img/Class1.svg";
import ClassOneD from "../../assets/img/Class1d.svg";
import ClassTwo from "../../assets/img/Class2.svg";
import ClassTwoD from "../../assets/img/Class2d.svg";
import ClassThree from "../../assets/img/Class3.svg";
import ClassThreeD from "../../assets/img/Class3d.svg";
import ClassFour from "../../assets/img/Class4.svg";
import ClassFourD from "../../assets/img/Class4d.svg";
import useCheckClass from "../../Hook/CheckStudent/useCheckStudent";

const CheckStudentThird = () => {
  const { isClickMenu, isClickStu, handleClickMenu, studentClassList, handleClickStu } = useCheckClass();

  return (
    <S.CheckClassWrap>
      <SideBar />
      <S.CheckClassMain>
        <S.ViewInfomationWrap>
          <S.SelectClassImgWrap>
            <img src={isClickMenu === "1반" ? ClassOne : ClassOneD} alt="" onClick={() => handleClickMenu("1반")} />
            <img src={isClickMenu === "2반" ? ClassTwo : ClassTwoD} alt="" onClick={() => handleClickMenu("2반")} />
            <img src={isClickMenu === "3반" ? ClassThree : ClassThreeD} alt="" onClick={() => handleClickMenu("3반")} />
          </S.SelectClassImgWrap>
          <S.ViewInfoUtilityWrap>
            <span>이름</span>
            <span>학번</span>
            <span>층</span>
            <span>실</span>
          </S.ViewInfoUtilityWrap>
          {/* {DummyListFirst.map((key, idx) => {
            if (isClickMenu === key.classNumber.substring(1, 2) + "반") {
              return (
                <S.ViewInfoStudentWrap key={idx}>
                  <S.ViewInfoStudentName>{key.name}</S.ViewInfoStudentName>
                  <S.ViewInfoStudentClassNumber>{key.classNumber}</S.ViewInfoStudentClassNumber>
                  <S.ViewinfoStudentFloor>{key.floor}</S.ViewinfoStudentFloor>
                  <S.ViewInfoStudentClass>{key.class}</S.ViewInfoStudentClass>
                </S.ViewInfoStudentWrap>
              );
            } else {
              return null;
            }
          })} */}
          {isClickMenu === "1반" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "우준성"} onClick={() => handleClickStu("우준성")}>
              <S.ViewInfoStudentName>우준성</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>3108</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>1층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>프로젝트 2실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
          {isClickMenu === "2반" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "배진영"} onClick={() => handleClickStu("배진영")}>
              <S.ViewInfoStudentName>배진영</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>3206</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>2층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>LAB 13실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
          {isClickMenu === "3반" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "우상범"} onClick={() => handleClickStu("우상범")}>
              <S.ViewInfoStudentName>우상범</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>3311</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>2층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>LAB 15실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckStudentThird;
