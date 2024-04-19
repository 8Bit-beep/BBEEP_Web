import axios from "axios";
import React, { useCallback, useState } from "react";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginData = useCallback(
    (e) => {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData],
  );

  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const onClickConfirmButton = async () => {
    try {
      await axios
        .post(`${CONFIG.serverUrl}/auth/sign-in`, {
          id: loginData.id,
          password: loginData.pw,
        })
        .then((res) => {
          Cookies.set("accessToken", res.data.accessToken);
          Cookies.set("refreshToken", res.data.refreshToken);
          showToast("sucess", "로그인 성공!");
          navigate("/main");
        });
    } catch (error) {
      if (error.resposne && error.status === 401) {
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
  };

  return {
    loginData,
    isLoggedIn,
    handleLoginData,
    handleLoggedIn,
    onClickConfirmButton,
  };
};

export default useLogin;
