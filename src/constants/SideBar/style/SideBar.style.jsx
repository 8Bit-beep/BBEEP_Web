import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 87vw);
  height: 100vh;

  background: #434f5e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MenuWrap = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
`;

export const StudentMenu = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;

  margin-top: 1vh;
`;

export const StudentMenuTitle = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const StudentTitleImg = styled.img`
  width: 23px;
  height: 28px;
  margin-left: 1vw;
  margin-top: -1vh;
`;

export const StudentMenuSpan = styled.span`
  color: #fff;
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin-left: 1vw;

  cursor: pointer;
`;

export const DropDownButtonImg = styled.img`
  width: 15px;
  height: 10px;

  margin-left: 2vw;

  cursor: pointer;
`;

export const StudentMenuCategories = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 2.6vw;
`;

export const StudentMenuCategory = styled.div`
  width: 100%;
  height: 33%;
  display: flex;

  align-items: center;
  align-self: center;

  cursor: pointer;

  background: ${(props) => (props.backgroundColor ? "#3CB0B8" : "transparent")};
`;

export const GradeImg = styled.img`
  margin-left: 1vw;
  height: 40px;
  width: 30px;
`;

export const GradeSpan = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin-left: 1vw;
`;

export const LabMenu = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;

  margin-top: 1vh;
`;

export const LabMenuTitle = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const LabTitleImg = styled.img`
  width: 23px;
  height: 28px;
  margin-left: 1vw;
  margin-top: -1vh;
`;

export const LabMenuSpan = styled.span`
  color: #fff;
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin-left: 1vw;

  cursor: pointer;
`;

export const LabMenuCategories = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 2.6vw;
`;

export const LabMenuCategory = styled.div`
  width: 100%;
  height: 33%;
  background: #3cb0b8;

  display: flex;

  align-items: center;
  align-self: center;

  cursor: pointer;
`;

export const LabImg = styled.img`
  margin-left: 1vw;
  height: 40px;
  width: 30px;
`;

export const LabSpan = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin-left: 1vw;
`;
