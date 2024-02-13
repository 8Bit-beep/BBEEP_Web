import React from "react";
import * as S from "../../constants/Header/style/Header.style";
import Logo from "../../assets/img/Logo.svg";
import SearchIcon from "../../assets/img/SeachIcon.png";
import TeacherProfileImg from "../../assets/img/TeacherProfileImg.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.Logo src={Logo} onClick={() => navigate("/main")} />
      <S.SearchWrap>
        <S.SearchInput placeholder="찾고싶은 학생이 있으신가요?" />
        <img src={SearchIcon} />
      </S.SearchWrap>
      <S.TeacherWrap>
        <img src={TeacherProfileImg} />
        <S.TeacherInfoWrap>
          <S.TeacherInfoWrap>
            <S.TeacherName>김익현 선생님</S.TeacherName>
            <S.TeacherPosition>당직선생님</S.TeacherPosition>
          </S.TeacherInfoWrap>
        </S.TeacherInfoWrap>
      </S.TeacherWrap>
    </S.Main>
  );
};

export default Header;
