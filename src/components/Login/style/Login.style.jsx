import styled from "styled-components";
import backroundimg from "../../../assets/img/bbeepLogin.png";

export const LoginWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${backroundimg});
  background-repeat: no-repeat;
`;

export const Main = styled.div`
  width: 75vw;
  height: 80vh;
  display: flex;
  background-color: #f6f7f9;
  margin: 0 auto;
  align-self: center;
  box-shadow: 0px 4px 250px 0px rgba(0, 0, 0, 0.25);
`;

export const Mainimg = styled.img``;

export const logo = styled.span`
  height: 9vh;
  font-size: 6rem;
  display: flex;
  margin: 0 auto;
  font-family: "SBAggroB";
  margin-top: 3vh;
  flex-direction: column;
  color: #2e3742;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const sublogo = styled.span`
  font-size: 1.3rem;
  margin: 0 auto;
  font-family: "inter";
  color: #2e3742;
`;

export const loginobj = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
`;

export const id = styled.input`
  width: 23vw;
  height: 7vh;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;

  padding-left: 2vw;
  &::placeholder {
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

export const ps = styled.input`
  width: 23vw;
  height: 7vh;
  margin-top: 5vh;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;
  padding-left: 2vw;
  margin-bottom: -2vh;
  padding-left: 2vw;

  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    outline: none;
  }
`;

export const LoginMaintainWrap = styled.div`
  display: flex;

  span {
    margin-top: 3.5vh;
  }
`;

export const LoginMaintain = styled.input`
  width: 4vw;
  height: 3vh;
  margin-top: 3vh;
  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 25vw;
  height: 7vh;
  border: 0;
  border-radius: 1rem;
  background-color: #303a46;
  margin-top: 8vh;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #dddddd;
  }
`;
