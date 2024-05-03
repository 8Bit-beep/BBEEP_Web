import React from "react";
import SideBar from "../../common/SideBar/CheckStudent/SideBar";
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

const CheckStudentSecond = () => {
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
            <img src={isClickMenu === "4반" ? ClassFour : ClassFourD} alt="" onClick={() => handleClickMenu("4반")} />
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
            <S.ViewInfoStudentWrap isClicked={isClickStu === "백승하"} onClick={() => handleClickStu("백승하")}>
              <S.ViewInfoStudentName>백승하</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>2109</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>2층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>LAB 12실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
          {isClickMenu === "2반" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "유승하"} onClick={() => handleClickStu("유승하")}>
              <S.ViewInfoStudentName>유승하</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>2213</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>2층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>LAB 11실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
          {isClickMenu === "3반" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "손민성"} onClick={() => handleClickStu("손민성")}>
              <S.ViewInfoStudentName>손민성</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>2313</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>3층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>메이커 실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
          {isClickMenu === "4반" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "이민규"} onClick={() => handleClickStu("이민규")}>
              <S.ViewInfoStudentName>이민규</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>2411</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>2층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>LAB 12실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckStudentSecond;
