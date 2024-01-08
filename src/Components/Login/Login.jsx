import "../../style/Login.style/Login.css";
import Logo from "../../img/Bbeep.svg";
import { useEffect, useState } from "react";
import { showToast } from "../../lib/Swal/Swal";

const User = {
  id: "yeonggu1234",
  pw: "qwer1234!",
};

const Login = () => {
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

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

  const onClickConfirmButton = () => {
    const ID = document.getElementById("id");
    const PW = document.getElementById("pw");
    if (id == User.id && pw == User.pw) {
      showToast("success", "Login Sex!");
    } else if (id !== User.id && pw === User.pw) {
      showToast("error", "ID Sex");
      ID.value = null;
    } else {
      showToast("error", "PW Sex");
      PW.value = null;
    }
  };

  return (
    <div className="LoginWrapper">
      <div className="LoginWrap">
        <img src={Logo} alt="" />
        <div className="InputWrap">
          <h1>Log in</h1>
          <input className="ID" placeholder="ID" id="id" value={id} onChange={handleID} />
          {!idValid && <div className="errorMessageWrap">ID를 입력해주세요.</div>}
          <input type="password" className="PW" placeholder="Password" id="pw" value={pw} onChange={handlePw} />
          {!pwValid && <div className="errorMessageWrap">비밀번호를 입력해주세요.</div>}
          <button className="LoginBtn" disabled={notAllow} onClick={onClickConfirmButton}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
