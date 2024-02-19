import React from "react";
import StudentSideBar from "../../constants/SideBar/CheckStudent/SideBar";
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

const CheckStudent = () => {
  const { isClickMenu, isClickStu, handleClickMenu, studentClassList, handleClickStu } = useCheckClass();

  return (
    <S.CheckClassWrap>
      <StudentSideBar />
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
          {/* {studentClassList.map((key, idx) => {
            if (isClickMenu === key.classNumber.substring(1, 2) + "반") {
              return (
                <S.ViewInfoStudentWrap key={idx} isClicked={isClickStu} onClick={handleClickStu}>
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
            <S.ViewInfoStudentWrap isClicked={isClickStu} onClick={handleClickStu}>
              <S.ViewInfoStudentName>신민호</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>1116</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>2층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>10실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckStudent;
