import * as S from "./style/Login.style";
import Mainimage from "../../assets/img/Mainimage.svg";
import useLogin from "../../Hook/auth/useLogin";
import NoneLoadingMain from "../../page/NoneLoadingMain/NoneLoadingMain";
import axios from "axios";

const Login = () => {
  const { id, pw, handleId, handlePw, onclickConfirmButton, handleLoggedIn, isLoggedIn } = useLogin();

  return (
    <>
      {isLoggedIn ? (
        <NoneLoadingMain />
      ) : (
        <S.LoginWrap>
          <S.Main>
            <S.Mainimg src={Mainimage}></S.Mainimg>
            <S.MainWrapper>
              <S.logo>
                삑<S.sublogo>삑에 로그인</S.sublogo>
              </S.logo>
              <S.loginobj>
                <S.id placeholder="아이디" onChange={handleId} value={id} />
                <S.ps placeholder="비밀번호" onChange={handlePw} value={pw} type="password" />
                <S.LoginMaintainWrap>
                  <S.LoginMaintain type="checkbox" onChange={handleLoggedIn} />
                  <span>로그인 유지랄병</span>
                </S.LoginMaintainWrap>
                <S.LoginButton onClick={onclickConfirmButton}>로그인</S.LoginButton>
              </S.loginobj>
            </S.MainWrapper>
          </S.Main>
        </S.LoginWrap>
      )}
    </>
  );
};

export default Login;
