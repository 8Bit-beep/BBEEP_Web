import "../../style/Login.style/Login.css";
import Logo from "../../img/Logo.svg";
import { useEffect, useRef, useState } from "react";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";
import SERVERURL from "../../Auth/ServerAddr";
import axios from "axios";

const User = {
  id: "kimPole",
  pw: "1234",
};

const Login = () => {
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const ShowPassWordRef = useRef(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const refreshAccessToken = async () => {
  //     try {
  //       const response = await axios.post(SERVERURL + "/api/refresh-token", {
  //         refreshToken: `${localStorage.getItem("refreshToken")}`,
  //       });

  //       const { accessToken } = response.data;

  //       // 여기서 accToken을 필요로 하는 작업 수행
  //     } catch (error) {
  //       console.error("Failed AccessToken Refresh", error);
  //     }
  //   };
  //   refreshAccessToken();
  // }, []);

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleID = (e) => {
    setId(e.target.value);
    setIdValid(true);
    if (id.length <= 0) {
      setIdValid(false);
    } else {
      setIdValid(true);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    setPwValid(true);
    if (pw.length > 0) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleShowPwChecked = () => {
    const password = ShowPassWordRef.current;
    if (password === null) return;

    setIsShowPassWord(!isShowPassWord);
    if (!isShowPassWord) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const onClickConfirmButton = async () => {
    try {
      const response = await axios.post(SERVERURL + "/auth/sign-in", {
        userId: `${id}`,
        password: `${pw}`,
      });

      


      if (id === User.id && pw === User.pw) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        console.log(localStorage.getItem("accessToken"));
        console.log(localStorage.getItem("refreshToken"));
        showToast("success", "onClickConfirmButton");
        navigate("/main");
      }
    } catch (error) {
      localStorage.clear();
      console.error(error);
    }
  };

  return (
    <div className="LoginWrapper">
      <div className="LoginWrap">
        <img src={Logo} alt="" className="Logo" />
        <div className="InputWrap">
          <h1>Log in</h1>
          <input className="ID" placeholder="ID" value={id} onChange={handleID} />
          {!idValid && <div className="errorMessageWrap">ID를 입력해주세요.</div>}
          <input
            type="password"
            className="PW"
            placeholder="Password"
            value={pw}
            onChange={handlePw}
            ref={ShowPassWordRef}
            maxLength={20}
          />
          {!pwValid && <div className="errorMessageWrap">비밀번호를 입력해주세요.</div>}
          <div className="ShowPwBtn">
            <label>
              <input type="checkbox" onChange={handleShowPwChecked} />
              <span>비밀번호 보기</span>
            </label>
          </div>
          <div className="ButtonWrap">
            <button className="LoginBtn" disabled={notAllow} onClick={onClickConfirmButton}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
