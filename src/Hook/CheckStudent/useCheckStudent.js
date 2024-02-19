import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "../../util/SideBar/useSideBarNavigation";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";
import Lab from "../../assets/img/Lab.svg";
import LabD from "../../assets/img/LabD.svg";

const useCheckClass = () => {
  const ImgData = [
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab1실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab2실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab3실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab4실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab5실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab6실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab7실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab8실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab9실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab10실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab11실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab12실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab13실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab14실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab15실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab16실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab17실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab18실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab19실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab20실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab21실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab22실" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState("");
  const [isClickStu, setIsClickStu] = useState(false);
  const [studentClassList, setStudentClassList] = useState([{}]);
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const params = {
  //         grade: `${Number(isClickCategory.substring(0, 1))}`,
  //         cls: `${Number(isClickMenu.substring(0, 1))}`,
  //       };
  //       const response = await axios.get(`${CONFIG.serverUrl}teacher/student/list`, {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get("accessToken")}`,
  //         },
  //         params,
  //       });
  //       setStudentClassList(...response.data);
  //       console.log(studentClassList);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [isClickCategory, isClickMenu]);

  // const handleClickMenu = (itemName) => {
  //   setIsClickMenu((prevItem) => (prevItem === itemName ? null : itemName));
  // };

  // const handleClickStu = () => {
  //   setIsClickStu((prev) => !prev);
  // };

  const handleImgChange = (itemName) => {
    setIsClicked(itemName);
  };
  return {
    ImgData,
    isClicked,
    handleImgChange,
  };
};

export default useCheckClass;
