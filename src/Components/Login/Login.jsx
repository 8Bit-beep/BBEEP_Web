import "../../style/Login.style/Login.css";
import Logo from "../../img/Logo.svg";
import { useEffect, useRef, useState } from "react";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";

const User = {
  id: "yeonggu1234",
  pw: "qwer1234!",
};

const Login = () => {
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const ShowPassWordRef = useRef(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleID = (e) => {
    setId(e.target.value);
    if (id.length <= 0) {
      setIdValid(false);
    } else {
      setIdValid(true);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=\S*?[a-zA-Z])(?=\S*?[0-9])(?=\S*?[$`~!@$!%*#^?&\\(\\)\-_=+])\S{8,20}$/;

    if (regex.test(e.target.value) && pw.length > 0) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleShowPwChecked = async () => {
    const password = await ShowPassWordRef.current;
    if (password === null) return;

    await setIsShowPassWord(!isShowPassWord);
    if (!isShowPassWord) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const onClickConfirmButton = () => {
    if (id === User.id && pw === User.pw) {
      showToast("success", "Login");
      navigate("/main");
    } else if (id !== User.id && pw === User.pw) {
      showToast("error", "ID");
      setId("");
    } else {
      showToast("error", "PW");
      setPw("");
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
          />
          {!pwValid && <div className="errorMessageWrap">비밀번호를 입력해주세요.</div>}
          <div className="ShowPwBtn">
            <label>
              <input type="checkbox" onChange={handleShowPwChecked} />
              <span>비밀번호 보X</span>
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
