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
          userId: `${id}`,
          password: `${pw}`,
        });
        if (response.status === 200) {
          showToast("success", "로그인 성공");
          navigate("/main");
          Cookies.set("accessToken", response.data.accessToken);
          Cookies.set("refreshToken", response.data.refreshToken);
        } else {
          showToast("error", "로그인 실패");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshToken = Cookies.get("refreshToken");
            const refreshResponse = await axios.post(`${CONFIG.serverUrl}auth/refresh-token`, {
              refreshToken,
            });
            if (refreshResponse.status === 200) {
              showToast("success", "토큰 재발급 성공");
              const newAccessToken = refreshResponse.data.accessToken;
              Cookies.set("accessToken", newAccessToken);
              // 재발급된 accessToken을 사용하여 다시 로그인 처리
              await onclickConfirmButton();
            } else {
              showToast("error", "토큰 재발급 실패");
            }
          } catch (refreshError) {
            console.error(refreshError);
          }
        } else {
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
