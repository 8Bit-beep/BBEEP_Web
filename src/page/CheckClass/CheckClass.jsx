import React from "react";
import SideBar from "../../constants/SideBar/CheckClass/index";
import * as S from "./style/style";
import useCheckClass from "../../Hook/CheckStudent/useCheckStudent";
import Floor1 from "../../assets/img/1.svg";
import Floor2 from "../../assets/img/2.svg";
const CheckClass = () => {
  const { isClicked, ImgData, handleImgChange } = useCheckClass();

  return (
    <S.CheckClassWrap>
      <SideBar />
      <S.CheckClassMain>
        <S.ViewInfomationWrap>
          <S.SelectClassImgWrap>
            {ImgData.map((key, idx) => (
              <div key={idx}>
                <img
                  src={isClicked === `${idx + 1}` ? key.clicked : key.default}
                  onClick={() => handleImgChange(`${idx + 1}`)}
                />
                <span>{key.text}</span>
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
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckClass;
