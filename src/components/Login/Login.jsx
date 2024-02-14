import * as S from "./style/Login.style";
import Mainimage from "../../assets/img/Mainimage.svg";
const Login = () => {
  return (
    <S.LoginWrap>
      <S.Main>
        <S.Mainimg src={Mainimage}></S.Mainimg>
        <S.MainWrapper>
          <S.logo>
            삑<S.sublogo>삑에 로그인</S.sublogo>
          </S.logo>
          <S.loginobj>
            <S.id placeholder="아이디"></S.id>
            <S.ps placeholder="비밀번호"></S.ps>
            <S.LoginMaintainWrap>
              <S.LoginMaintain type="checkbox" />
              <span>로그인 유지</span>
            </S.LoginMaintainWrap>
            <S.LoginButton>
              <span>로그인</span>
            </S.LoginButton>
          </S.loginobj>
        </S.MainWrapper>
      </S.Main>
    </S.LoginWrap>
  );
};

export default Login;
