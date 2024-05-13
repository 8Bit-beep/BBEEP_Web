import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "../../util/SideBar/useSideBarNavigation";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";
import Lab from "../../assets/img/Lab.svg";
import LabD from "../../assets/img/LabD.svg";
import Proj1D from "../../assets/img/Proj1D.svg";
import Proj1 from "../../assets/img/Proj1.svg";
import Proj2D from "../../assets/img/Proj2D.svg";
import Proj2 from "../../assets/img/Proj2.svg";
import Proj3D from "../../assets/img/Proj3D.svg";
import Proj3 from "../../assets/img/Proj3.svg";
import Proj4D from "../../assets/img/Proj4D.svg";
import Proj4 from "../../assets/img/Proj4.svg";
import Proj5D from "../../assets/img/Proj5D.svg";
import Proj5 from "../../assets/img/Proj5.svg";
import Proj6D from "../../assets/img/Proj6D.svg";
import Proj6 from "../../assets/img/Proj6.svg";

const useCheckClass = () => {
  const ImgDataFirstFloor = [
    { default: `${Proj1D}`, clicked: `${Proj1}` },
    { default: `${Proj2D}`, clicked: `${Proj2}` },
  ];
  const ImgDataSecondFloor = [
    { default: `${Proj3D}`, clicked: `${Proj3}` },
    { default: `${Proj4D}`, clicked: `${Proj4}` },
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
  ];

  const imgDataThirdFloor = [
    { default: `${Proj5D}`, clicked: `${Proj5}` },
    { default: `${Proj6D}`, clicked: `${Proj6}` },
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
  const [isClickMenu, setIsClickMenu] = useState("");
  const [studentClassList, setStudentClassList] = useState([{}]);
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });
  const grade = Number(isClickCategory.substring(0, 1));
  const cls = Number(isClickMenu.substring(0, 1));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${CONFIG.serverUrl}/students/cls?grade=${grade}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        });
        setStudentClassList(...response.data);
        console.log(studentClassList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isClickCategory, isClickMenu]);

  const handleClickMenu = (itemName: string) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? null : itemName));
  };

  const handleClickStu = (itemName) => {
    setIsClickStu(itemName);
  };

  const handleImgChange = (itemName) => {
    setIsClicked(itemName);
    console.log(ImgDataFirstFloor.indexOf(itemName));
  };
  return {
    ImgDataFirstFloor,
    ImgDataSecondFloor,
    imgDataThirdFloor,
    isClicked,
    isClickStu,
    isClickMenu,
    handleImgChange,
    handleClickMenu,
    handleClickStu,
  };
};

export default useCheckClass;
