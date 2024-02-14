import React from "react";
import { useState } from "react";
import "../../style/Class.style/MainClass.css";
import CheckClassSide from "../Side/CheckClassSide";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../lib/Modal/Modal";

const HealthRoom = [
  { grade: 1, cls: 1, number: 15, name: "서영우" },
  { grade: 1, cls: 1, number: 8, name: "김건우" },
];

const WeClass = [
  { grade: 1, cls: 1, number: 15, name: "서영우" },
  { grade: 1, cls: 1, number: 8, name: "김건우" },
];

const BandStand = [
  { grade: 1, cls: 1, number: 15, name: "서영우" },
  { grade: 1, cls: 1, number: 8, name: "김건우" },
];
const library = [
  { grade: 1, cls: 1, number: 15, name: "서영우" },
  { grade: 1, cls: 1, number: 8, name: "김건우" },
];
const PracticeRoom = [
  { grade: 1, cls: 1, number: 15, name: "서영우" },
  { grade: 1, cls: 1, number: 8, name: "김건우" },
];
const MusicRoom = [
  { grade: 1, cls: 1, number: 15, name: "서영우" },
  { grade: 1, cls: 1, number: 8, name: "김건우" },
];

const MainClass = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);
  const [isOpenModal6, setIsOpenModal6] = useState(false);

  const navigate = useNavigate();

  const onClickCheckRoom = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "학생 조회하기":
        navigate("/first-grade");
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
    } else if (modalNumber === 4) {
      setIsOpenModal4(true);
    } else if (modalNumber === 5) {
      setIsOpenModal5(true);
    } else {
      setIsOpenModal6(true);
    }
  };

  const onClickCloseModal = (modalNumber) => {
    if (modalNumber === 1) {
      setIsOpenModal1(false);
    } else if (modalNumber === 2) {
      setIsOpenModal2(false);
    } else if (modalNumber === 3) {
      setIsOpenModal3(false);
    } else if (modalNumber === 4) {
      setIsOpenModal4(false);
    } else if (modalNumber === 5) {
      setIsOpenModal5(false);
    } else {
      setIsOpenModal6(false);
    }
  };

  return (
    <div className="ClassCheckWrapper">
      <CheckClassSide />
      <div className="HeaderBar">
        <span onClick={() => onClickCheckRoom("실 조회하기")} className="Room">
          실 조회하기
        </span>
        <span
          onClick={() => onClickCheckRoom("학생 조회하기")}
          className={isClickedCheck === "학생 조회하기" ? "Room" : "NoneClick"}
        >
          학생 조회하기
        </span>
      </div>
      <div className="MainLabCategory">
        <div onClick={() => onClickOpenModal(1)}>보건실</div>
        <Modal isOpen={isOpenModal1} onClose={() => onClickCloseModal(1)}>
          {HealthRoom.map((key) => (
            <div className="ClassDitailStudentName">
              <span>{key.cls}</span>
              <span>{key.grade}</span>
              <span>{key.number}</span>
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(2)}>위클래스</div>
        <Modal isOpen={isOpenModal2} onClose={() => onClickCloseModal(2)}>
          {WeClass.map((key) => (
            <div className="ClassDitailStudentName">
              <span>{key.cls}</span>
              <span>{key.grade}</span>
              <span>{key.number}</span>
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(3)}>야외음악당</div>
        <Modal isOpen={isOpenModal3} onClose={() => onClickCloseModal(3)}>
          {BandStand.map((key) => (
            <div className="ClassDitailStudentName">
              <span>{key.cls}</span>
              <span>{key.grade}</span>
              <span>{key.number}</span>
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(4)}>도서관</div>
        <Modal isOpen={isOpenModal4} onClose={() => onClickCloseModal(4)}>
          {library.map((key) => (
            <div className="ClassDitailStudentName">
              <span>{key.cls}</span>
              <span>{key.grade}</span>
              <span>{key.number}</span>
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(5)}>산학실</div>
        <Modal isOpen={isOpenModal5} onClose={() => onClickCloseModal(5)}>
          {PracticeRoom.map((key) => (
            <div className="ClassDitailStudentName">
              <span>{key.cls}</span>
              <span>{key.grade}</span>
              <span>{key.number}</span>
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(6)}>음악실</div>
        <Modal isOpen={isOpenModal6} onClose={() => onClickCloseModal(6)}>
          {MusicRoom.map((key) => (
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
export default MainClass;
