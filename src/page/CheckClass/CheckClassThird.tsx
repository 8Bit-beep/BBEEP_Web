import React from "react";
import SideBar from "../../common/SideBar/CheckClass/index";
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
          <S.SelectClassImgWrap>
            {imgDataThirdFloor.map((key, idx) => (
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
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckClass;
