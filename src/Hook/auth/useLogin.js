import { useState } from "react";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";

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

  const onclickConfirmButton = async () => {
    if (id === "" && pw === "") {
      showToast("error", "로그인실패");
    } else {
      try {
        const response = await axios.post(`${CONFIG.serverUrl}auth/sign-in`, {
          id: `${id}`,
          password: `${pw}`,
        });
        if (response.status === 201) {
          showToast("success", "로그인 성공");
          navigate("/main");
          Cookies.set("accessToken", response.data.accessToken);
        } else {
          showToast("error", "로그인 실패");
        }
      } catch (error) {
        if (error.response && error.status === 401) {
          try {
            const accessToken = Cookies.get("accessToken");
            const refreshResponse = await axios.post(`${CONFIG.serverUrl}auth/refresh`, {
              accessToken,
            });
            if (refreshResponse.status === 200) {
              showToast("success", "토큰 재발급 성공");
              const newAccessToken = refreshResponse.accessToken;
              Cookies.remove("accessToken");
              Cookies.set("accessToken", newAccessToken);
            } else {
              showToast("error", "토큰 재발급 실패");
            }
          } catch (refreshError) {
            console.error(refreshError);
          }
        } else {
          showToast("error", "로그인 실패");
          console.error(error);
        }
      }
    }
  };

  return {
    id,
    pw,
    handleId,
    handlePw,
    onclickConfirmButton,
  };
};

export default useLogin;
