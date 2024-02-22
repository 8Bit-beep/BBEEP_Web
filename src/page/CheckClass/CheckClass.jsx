import React from "react";
import SideBar from "../../constants/SideBar/CheckClass/index";
import * as S from "./style/style";
import useCheckClass from "../../Hook/CheckStudent/useCheckStudent";
import Floor1 from "../../assets/img/1.svg";
import Floor2 from "../../assets/img/2.svg";
const CheckClass = () => {
  const {
    ImgDataFirstFloor,
    ImgDataSecondFloor,
    imgDataThirdFloor,
    isClicked,
    isClickStu,
    isClickMenu,
    handleImgChange,
    handleClickMenu,
    handleClickStu,
  } = useCheckClass();

  return (
    <S.CheckClassWrap>
      <SideBar />
      <S.CheckClassMain>
        <S.ViewInfomationWrap>
          <S.SelectClassImgWrap style={{ alignItems: "center", alignSelf: "center", justifyContent: "center" }}>
            {ImgDataFirstFloor.map((key, idx) => (
              <div key={idx}>
                <img
                  src={isClicked === `${idx + 1}` ? key.clicked : key.default}
                  onClick={() => handleImgChange(`${idx + 1}`)}
                />
                <span>{key.text}</span>
                {console.log(idx + 1)}
              </div>
            ))}
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
          {isClicked === "1" && (
            <S.ViewInfoStudentWrap isClicked={isClickStu === "이해준"} onClick={() => handleClickStu("이해준")}>
              <S.ViewInfoStudentName>이해준</S.ViewInfoStudentName>
              <S.ViewInfoStudentClassNumber>1214</S.ViewInfoStudentClassNumber>
              <S.ViewinfoStudentFloor>1층</S.ViewinfoStudentFloor>
              <S.ViewInfoStudentClass>프로젝트 1실</S.ViewInfoStudentClass>
            </S.ViewInfoStudentWrap>
          )}
          {isClicked === "2" && (
            <>
              <S.ViewInfoStudentWrap isClicked={isClickStu === "배채희"} onClick={() => handleClickStu("배채희")}>
                <S.ViewInfoStudentName>배채희</S.ViewInfoStudentName>
                <S.ViewInfoStudentClassNumber>1402</S.ViewInfoStudentClassNumber>
                <S.ViewinfoStudentFloor>1층</S.ViewinfoStudentFloor>
                <S.ViewInfoStudentClass>프로젝트2실</S.ViewInfoStudentClass>
              </S.ViewInfoStudentWrap>
              <S.ViewInfoStudentWrap isClicked={isClickStu === "우준성"} onClick={() => handleClickStu("우준성")}>
                <S.ViewInfoStudentName>우준성</S.ViewInfoStudentName>
                <S.ViewInfoStudentClassNumber>3108</S.ViewInfoStudentClassNumber>
                <S.ViewinfoStudentFloor>1층</S.ViewinfoStudentFloor>
                <S.ViewInfoStudentClass>프로젝트 2실</S.ViewInfoStudentClass>
              </S.ViewInfoStudentWrap>
            </>
          )}
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckClass;
