import React from "react";
import * as S from "../../constants/Header/style/Header.style";
import Logo from "../../assets/img/Logo.svg";
import SearchIcon from "../../assets/img/SeachIcon.png";
import DropDownStudent from "../../assets/img/DropDownStudent.png";
import DropDownClass from "../../assets/img/LabMenuTitleImg.png";
import TeacherProfileImg from "../../assets/img/TeacherProfileImg.png";
import useHeader from "../../Hook/Header/useHeader";
import useInfo from "../../Hook/Info/useInfo";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isClicked, handleUrl } = useHeader({ location, navigate });
  const { name, email, department, job, handleClickProfile, isProfile, LogOut } = useInfo();

  return (
    <S.Main>
      <S.Logo src={Logo} onClick={() => navigate("/main")} />
      <S.SearchWrap>
        <S.SearchInput placeholder="찾고싶은 학생이 있으신가요?" />
        <img src={SearchIcon} />
      </S.SearchWrap>
      <div style={{ display: "flex", marginLeft: "5vw" }}>
        <S.DropDownWrap
          style={{ marginRight: "2vw" }}
          onClick={() => handleUrl("학생 조회하기")}
          isClicked={isClicked === "학생 조회하기"}
        >
          <img src={DropDownStudent} />
          <span>학생 조회하기</span>
        </S.DropDownWrap>
        <S.DropDownWrap onClick={() => handleUrl("실 조회하기")} isClicked={isClicked === "실 조회하기"}>
          <img src={DropDownClass} />
          <span>실 조회하기</span>
        </S.DropDownWrap>
      </div>
      <S.TeacherWrap onClick={handleClickProfile}>
        <img src={TeacherProfileImg} />
        <S.TeacherInfoWrap>
          <S.TeacherInfoWrap>
            <S.TeacherName>{name}</S.TeacherName>
            <S.TeacherPosition>{department + job}</S.TeacherPosition>
          </S.TeacherInfoWrap>
        </S.TeacherInfoWrap>
      </S.TeacherWrap>
      {isProfile && (
        <S.MemberInfoWrap>
          <S.MemberInfo>
            <S.EmailInfo>{email}</S.EmailInfo>
          </S.MemberInfo>
          <S.MemberInfo>
            <S.SignOut onClick={LogOut}>로그아웃</S.SignOut>
          </S.MemberInfo>
        </S.MemberInfoWrap>
      )}
    </S.Main>
  );
};

export default Header;
