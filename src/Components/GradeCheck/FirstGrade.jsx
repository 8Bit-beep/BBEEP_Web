import React, { useEffect, useState } from "react";
import Side from "../Side/Side";
import "../../style/Grade.style/Grade.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../lib/Modal/Modal";
import axios from "axios";
import SERVERURL from "../../Auth/ServerAddr";

const FirstClassStudent = [
  { id: 1, name: "권에림" },
  { id: 2, name: "김가영" },
  { id: 3, name: "류현서" },
];

const SecondClassStudent = [
  { id: 1, name: "김주환" },
  { id: 2, name: "김지원" },
  { id: 3, name: "박재욱" },
];

const ThirdClassStudent = [
  { id: 1, name: "김수아" },
  { id: 2, name: "김은진" },
  { id: 3, name: "이윤선" },
];

const FourthClassStudent = [
  { id: 1, name: "배성은" },
  { id: 2, name: "배채희" },
  { id: 3, name: "김호준" },
];

const FirstGrade = () => {
  useEffect(() => {
    const GetClassList = async () => {
      const params = { grade: 1, cls: 1 };
      const response = await axios.get(
        SERVERURL + "/teacher/student/list",

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          params,
        },
      );
      setCls(response.data);
    };
    GetClassList();
  }, []);

  const [cls, setCls] = useState();
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const navigate = useNavigate();

  const onClickCheckRoom = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "실 조회하기":
        navigate("/lab-class");
        break;
    }
  };

  const onClickOpenModal = (modalNumber) => {
    if (modalNumber === 1) {
      setIsOpenModal1(true);
    } else if (modalNumber === 2) {
      setIsOpenModal2(true);
    } else if (modalNumber === 3) {
      setIsOpenModal3(true);
    } else {
      setIsOpenModal4(true);
    }
  };

  const onClickCloseModal = (modalNumber) => {
    if (modalNumber === 1) {
      setIsOpenModal1(false);
    } else if (modalNumber === 2) {
      setIsOpenModal2(false);
    } else if (modalNumber === 3) {
      setIsOpenModal3(false);
    } else {
      setIsOpenModal4(false);
    }
  };

  return (
    <div className="GradeCheckWrapper">
      <Side />
      <div className="HeaderBar">
        <span
          onClick={() => onClickCheckRoom("실 조회하기")}
          className={isClickedCheck === "실 조회하기" ? "Room" : "NoneClick"}
        >
          실 조회하기
        </span>
        <span onClick={() => onClickCheckRoom("학반 조회하기")} className="ClassSelected">
          학반 조회하기
        </span>
      </div>
      <div className="Category">
        <div onClick={() => onClickOpenModal(1)}>1반</div>
        <Modal isOpen={isOpenModal1} onClose={() => onClickCloseModal(1)}>
          {FirstClassStudent.map((key) => (
            <div className="DetailStudentName">{key.name}</div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(2)}>2반</div>
        <Modal isOpen={isOpenModal2} onClose={() => onClickCloseModal(2)}>
          {SecondClassStudent.map((key) => (
            <div className="DetailStudentName">{key.name}</div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(3)}>3반</div>
        <Modal isOpen={isOpenModal3} onClose={() => onClickCloseModal(3)}>
          {ThirdClassStudent.map((key) => (
            <div className="DetailStudentName">{key.name}</div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(4)}>4반</div>
        <Modal isOpen={isOpenModal4} onClose={() => onClickCloseModal(4)}>
          {FourthClassStudent.map((key) => (
            <div className="DetailStudentName">{key.name}</div>
          ))}
        </Modal>
      </div>
    </div>
  );
};

export default FirstGrade;
