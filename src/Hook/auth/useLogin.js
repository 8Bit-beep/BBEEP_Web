import { useEffect, useState } from "react";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "../../config/config.json";

const useLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handlePw = (event) => {
    setPw(event.target.value);
  };

  const onclickConfirnButton = async () => {
    if (id === "" && pw === "") {
      showToast("error", "로그인실패");
    } else {
      try {
        const response = await axios.post(`${CONFIG.serverUrl}auth/sign-in`, {
          userId: `${id}`,
          password: `${pw}`,
        });
        if (response.status === 200) {
          showToast("success", "로그인 성공");
          navigate("/main");
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
        } else {
          showToast("error", "로그인 실패");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    id,
    pw,
    handleId,
    handlePw,
    onclickConfirnButton,
  };
};

export default useLogin;
