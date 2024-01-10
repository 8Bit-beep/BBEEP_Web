import React, { useState } from "react";
import Side from "../Side/Side";
import "../../style/Grade.style/Grade.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../lib/Modal/Modal";

const FirstClassStudent = [
  { id: 1, name: "김준호" },
  { id: 2, name: "우준성" },
  { id: 3, name: "이경태" },
];

const SecondClassStudent = [
  { id: 1, name: "배진영" },
  { id: 2, name: "김성주" },
  { id: 3, name: "임동현" },
];

const ThirdClassStudent = [
  { id: 1, name: "기준" },
  { id: 2, name: "박지건" },
  { id: 3, name: "박병관" },
];

const ThirdGrade = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
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
    } else {
      setIsOpenModal3(true);
    }
  };

  const onClickCloseModal = (modalNumber) => {
    if (modalNumber === 1) {
      setIsOpenModal1(false);
    } else if (modalNumber === 2) {
      setIsOpenModal2(false);
    } else {
      setIsOpenModal3(false);
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
      </div>
    </div>
  );
};

export default ThirdGrade;
