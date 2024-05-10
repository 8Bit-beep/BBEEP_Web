import axios from "axios";
import React, { useCallback, useState } from "react";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";
import Token from "../../Hook/token/Token";

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
          Cookies.set("bbeep-access-token", res.data.accessToken);
          Cookies.set("bbeep-refresh-token", res.data.refreshToken);
          showToast("sucess", "로그인 성공!");
          navigate("/main");
        });
    } catch (error) {
      if (error.resposne && error.status === 401) {
        const refreshToken = Cookies.get("bbeep-refresh-token");
        Token(refreshToken);
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
