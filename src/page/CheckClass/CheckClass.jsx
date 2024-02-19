import React from "react";
import SideBar from "../../constants/SideBar/CheckClass/index";
import * as S from "../style/CheckStudent.style";
import ClassOne from "../../assets/img/Class1.svg";
import ClassOneD from "../../assets/img/Class1d.svg";
import ClassTwo from "../../assets/img/Class2.svg";
import ClassTwoD from "../../assets/img/Class2d.svg";
import useCheckClass from "../../Hook/CheckStudent/useCheckStudent";

const CheckClass = () => {
  const { isClickMenu, handleClickMenu, studentClassList } = useCheckClass();

  return (
    <S.CheckClassWrap>
      <SideBar />
      <S.CheckClassMain>
        <S.ViewInfomationWrap>
          <S.SelectClassImgWrap>
            <img src={isClickMenu === "1반" ? ClassOne : ClassOneD} alt="" onClick={() => handleClickMenu("1반")} />
            <img src={isClickMenu === "2반" ? ClassTwo : ClassTwoD} alt="" onClick={() => handleClickMenu("2반")} />
          </S.SelectClassImgWrap>
          <S.ViewInfoUtilityWrap>
            <span>이름</span>
            <span>학번</span>
            <span>층</span>
            <span>실</span>
          </S.ViewInfoUtilityWrap>
          {/* {studentClassList.map((key, idx) => {
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
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckClass;
