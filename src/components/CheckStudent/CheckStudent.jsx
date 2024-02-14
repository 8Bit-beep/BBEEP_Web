import React from "react";
import SideBar from "../../constants/SideBar/SideBar";
import * as S from "./style/CheckStudent.style";
import useCheckClass from "../../Hook/CheckClass/useCheckClass";
import Tesct from "./Tesct";
const CheckClass = () => {
  const { isClickMenu, handleClickMenu, DummyListFirst } = useCheckClass();

  return (
    <>
      <S.CheckClassWrap>
        <SideBar />
        <S.CheckClassMain>
          <S.SideBar>
            <S.ClassNumber onClick={() => handleClickMenu("1반")} backgroundColor={isClickMenu === "1반"}>
              1반
            </S.ClassNumber>
            <S.ClassNumber onClick={() => handleClickMenu("2반")} backgroundColor={isClickMenu === "2반"}>
              2반
            </S.ClassNumber>
            <S.ClassNumber onClick={() => handleClickMenu("3반")} backgroundColor={isClickMenu === "3반"}>
              3반
            </S.ClassNumber>
            <S.ClassNumber onClick={() => handleClickMenu("4반")} backgroundColor={isClickMenu === "4반"}>
              4반
            </S.ClassNumber>
          </S.SideBar>
          <S.ViewInfomationWrap>
            <S.ViewInfoUtilityWrap>
              <span>이름</span>
              <span>학번</span>
              <span>층</span>
              <span>실</span>
            </S.ViewInfoUtilityWrap>
            {DummyListFirst.map((key, idx) => (
              <S.ViewInfoStudentWrap key={idx}>
                <S.ViewInfoStudentName>{key.name}</S.ViewInfoStudentName>
                <S.ViewInfoStudentClassNumber>{key.classNumber}</S.ViewInfoStudentClassNumber>
                <S.ViewinfoStudentFloor>{key.floor}</S.ViewinfoStudentFloor>
                <S.ViewInfoStudentClass>{key.class}</S.ViewInfoStudentClass>
              </S.ViewInfoStudentWrap>
            ))}
          </S.ViewInfomationWrap>
        </S.CheckClassMain>
      </S.CheckClassWrap>
    </>
  );
};

export default CheckClass;
