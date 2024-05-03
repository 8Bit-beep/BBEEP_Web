import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 90vh);

  display: flex;
  align-items: center;

  background: #323a45;
`;

export const Logo = styled.img`
  width: calc(100vw - 90vw);
  height: calc(100vh - 93vh);

  margin-left: 2vw;

  cursor: pointer;
`;

export const DropDownWrap = styled.div`
  width: calc(100vw - 87vw);
  height: calc(100vh - 95vh);

  border: none;
  border-radius: 50px;

  background-color: ${(props) => (props.isClicked ? "#3CB0B8" : "#aaaaaa")};

  display: flex;
  align-items: center;
  align-self: center;

  cursor: pointer;

  img {
    margin-left: 1vw;
  }

  span {
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    margin-left: 1.3vw;
  }
`;

export const SearchWrap = styled.div`
  width: calc(100vw - 73vw);
  height: calc(100vh - 96vh);

  background: #fff;

  margin-left: 7vw;

  border: none;

  img {
    position: absolute;

    left: 19.7vw;
    top: 4vh;
  }
`;

export const SearchInput = styled.input`
  width: 96%;
  height: 100%;
  background-color: #fff;
  border: none;

  padding-left: 3vw;

  color: #000;
  font-family: Inter;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &::placeholder {
    color: rgba(221, 221, 221, 0.87);
  }

  &:focus {
    outline: none;
  }
`;

export const TeacherWrap = styled.div`
  width: calc(100vw - 85vw);
  height: calc(100vh - 92vh);

  margin-left: 6vw;

  display: flex;
  align-items: center;
`;

export const TeacherInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.8vw;
`;

export const TeacherName = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: normal;
`;

export const TeacherPosition = styled.span`
  color: #dadada;
  font-family: Inter;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const showInfo = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const MemberInfoWrap = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: calc(100vw - 85vw);
  height: calc(100vh - 90vh);

  background-color: #303a46;

  top: 10vh;
  left: 85vw;

  animation: ${showInfo} 1s ease-out;

  justify-content: space-evenly;
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`;

export const EmailInfo = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SignOut = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  color: red;
`;
