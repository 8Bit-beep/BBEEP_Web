import { useState } from "react";

const useCheckClass = () => {
  const DummyListFirst = [
    { name: "김가영", classNumber: "1102", floor: "2층", class: "4실" },
    { name: "배채희", classNumber: "1402", floor: "3층", class: "15실" },
    { name: "김가영", classNumber: "1102", floor: "2층", class: "4실" },
  ];

  const DummyListSecond = [
    { name: "김가영", classNumber: "1102", floor: "2층", class: "4실" },
    { name: "배채희", classNumber: "1402", floor: "3층", class: "15실" },
    { name: "김가영", classNumber: "1102", floor: "2층", class: "4실" },
  ];

  const [isClickMenu, setIsClickMenu] = useState();

  const handleClickMenu = (itemName) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? null : itemName));
  };

  return {
    isClickMenu,
    handleClickMenu,
    DummyListFirst,
  };
};

export default useCheckClass;
