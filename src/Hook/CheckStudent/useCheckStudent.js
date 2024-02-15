import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "../../util/SideBar/useSideBarNavigation";
import CONFIG from "../../config/config.json";
const useCheckClass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isClickMenu, setIsClickMenu] = useState("1반");
  const [studentClassList, setStudentClassList] = useState([{}]);
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          grade: `${Number(isClickCategory.substring(0, 1))}`,
          cls: `${Number(isClickMenu.substring(0, 1))}`,
        };
        const response = await axios.get(`${CONFIG.serverUrl}teacher/student/list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          params,
        });
        setStudentClassList(response.data);
        console.log(studentClassList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isClickCategory, isClickMenu]);

  const handleClickMenu = (itemName) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? null : itemName));
  };

  return {
    isClickMenu,
    handleClickMenu,
    studentClassList,
  };
};

export default useCheckClass;
