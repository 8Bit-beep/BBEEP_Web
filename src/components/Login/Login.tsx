import * as S from "./style/Login.style";
import Mainimage from "../../assets/img/Mainimage.svg";
import useLogin from "../../Hook/auth/useLogin";
import NoneLoadingMain from "../../page/NoneLoadingMain/NoneLoadingMain";
import axios from "axios";

const Login = () => {
  const { ...hooks } = useLogin();

  return (
    <>
      {hooks.isLoggedIn ? (
        <NoneLoadingMain />
      ) : (
        <S.LoginWrap>
          <S.Main>
            <S.Mainimg src={Mainimage} />
            <S.MainWrapper>
              <S.logo>
                삑<S.sublogo>삑에 로그인</S.sublogo>
              </S.logo>
              <S.loginobj>
                <S.id placeholder="아이디" name="id" onChange={hooks.handleLoginData} value={hooks.loginData.id} />
                <S.ps
                  placeholder="비밀번호"
                  type="password"
                  name="pw"
                  onChange={hooks.handleLoginData}
                  value={hooks.loginData.pw}
                />
                <S.LoginMaintainWrap>
                  <S.LoginMaintain type="checkbox" onChange={hooks.handleLoggedIn} />
                  <span>로그인 유지</span>
                </S.LoginMaintainWrap>
                <S.LoginButton onClick={hooks.onClickConfirmButton}>로그인</S.LoginButton>
              </S.loginobj>
            </S.MainWrapper>
          </S.Main>
        </S.LoginWrap>
      )}
    </>
  );
};

export default Login;
