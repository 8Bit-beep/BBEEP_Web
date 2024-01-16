import React, { useState } from "react";
import "../../style/Class.style/ExerciseClass.css";
import CheckClassSide from "../Side/CheckClassSide";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../lib/Modal/Modal";

const Exercise = [{ grade: 1, cls: 1, number: 15, name: "서영우" }];

const ExerciseClass = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  const onClickCheckRoom = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "학반 조회하기":
        navigate("/first-grade");
        break;
    }
  };

  const onClickOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClickCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="ClassCheckWrapper">
      <CheckClassSide />
      <div className="HeaderBar">
        <span onClick={() => onClickCheckRoom("실 조회하기")} className="Room">
          실 조회하기
        </span>
        <span
          onClick={() => onClickCheckRoom("학반 조회하기")}
          className={isClickedCheck === "학반 조회하기" ? "Room" : "NoneClick"}
        >
          학반 조회하기
        </span>
      </div>
      <div className="MainLabCategory">
        <div onClick={onClickOpenModal}>강당</div>
        <Modal isOpen={isOpenModal} onClose={onClickCloseModal}>
          {Exercise.map((key) => (
            <div className="ClassDitailStudentName">
              <span>{key.cls}</span>
              <span>{key.grade}</span>
              <span>{key.number}</span>
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
      </div>
    </div>
  );
};

export default ExerciseClass;
