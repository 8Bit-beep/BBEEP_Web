import axios from "axios";
import { useEffect, useState } from "react";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";
import useLogin from "../auth/useLogin";

const useInfo = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [job, setJob] = useState();
  const { loginData } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    getMemberInfo();
  });

  const handleClickProfile = () => {
    setIsProfile(!isProfile);
  };

  const getMemberInfo = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}/teachers/info`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("bbeep-access-token")}`,
        },
      });
      if (response.status !== 200) {
        showToast("error", "멤버 정보 불러오기 실패");
      } else {
        setName(response.data.name);
        setEmail(response.data.email);
        setDepartment(response.data.department);
        setJob(response.data.job);
      }
    } catch (e) {
      showToast("error", "통신 오류");
    }
  };

  const LogOut = async () => {
    const reponse = await axios.delete(`${CONFIG.serverUrl}/users`, {
      headers: {
        Authorization: Cookies.get("bbeep-access-token"),
      },
      data: {
        password: loginData.pw,
      },
    });
    if (reponse.status === 200) {
      showToast("로그아웃 성공!");
      Cookies.remove("bbeep-access-token");
      Cookies.remove("bbeep-refresh-token");
      navigate("/");
    }
  };

  return {
    isProfile,
    name,
    email,
    department,
    job,
    handleClickProfile,
    LogOut,
  };
};

export default useInfo;
