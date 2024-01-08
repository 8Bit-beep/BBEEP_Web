import React, { useEffect, useState } from "react";
import "../../style/Login.style/Login.css";
import Logo from "../../img/Group 23.svg";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [Allow, setAllow] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [idValid, setIdValid] = useState(false);

  useEffect(() => {
    if (idValid && pwValid) {
      setAllow(true);
      return;
    }
    setAllow(false);
  }, [idValid, pwValid]);

  const onClickConfirButton = () => {
    alert("서영우");
  };

  const changeId = (e) => {
    setId(e.target.value);
    if (id.length > 0) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const changePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=\S*?[a-zA-Z])(?=\S*?[0-9])(?=\S*?[$`~!@$!%*#^?&\(\)\-_=+])\S{8,20}$/;

    if (regex.test(e.target.value) && pw.length > 0) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  return (
    <div>
      <div className={"login-background"}>
        <div className={"login"}>
          <img className={"img"} src={Logo} />
          <h1>Login</h1>
          <div className={"Login-UI"}>
            <input className={"ID"} placeholder={"ID"} type={"text"} value={id} onChange={changeId} />
            <input placeholder={"password"} type={"password"} value={pw} onChange={changePw} />
            <button disabled={Allow} onClick={onClickConfirButton}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
