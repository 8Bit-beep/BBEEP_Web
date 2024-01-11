import React, { useState } from "react";
import CheckClassSide from "../Side/CheckClassSide";
import "../../style/Class.style/SpecialClass.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../lib/Modal/Modal";

const ArtClass = [
  { grade: 1, cls: 1, number: "04", name: "류현서" },
  { grade: 2, cls: 3, number: "13", name: "손민성" },
  { grade: 3, cls: 3, number: "6974", name: "우상범" },
];

const ScienceClass = [
  { grade: 1, cls: 1, number: "18", name: "김혜정" },
  { grade: 2, cls: 3, number: "28", name: "권하진" },
  { grade: 3, cls: 1, number: "07", name: "김영성" },
];

const MobileProgramingClass = [
  { grade: 1, cls: 1, number: "74", name: "신유성" },
  { grade: 1, cls: 3, number: "11", name: "백준혁" },
  { grade: 1, cls: 3, number: "13", name: "엄성민" },
];

const OcestaClass = [
  { grade: 2, cls: 2, number: "13", name: "유승하" },
  { grade: 1, cls: 2, number: "69", name: "정명교" },
  { grade: 2, cls: 1, number: "911", name: "김민기" },
];

const GatherClass = [
  { grade: 1, cls: 3, number: "03", name: "이윤선" },
  { grade: 1, cls: 3, number: "04", name: "임규연" },
  { grade: 1, cls: 3, number: "06", name: "최미래" },
];

const SpecialClass = () => {
  const [isClickedCheck, setIsClickedCheck] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);
  const navigate = useNavigate();

  const onClickCheckRoom = (check) => {
    setIsClickedCheck((prevCheck) => (prevCheck === check ? null : check));

    switch (check) {
      case "학반 조회하기":
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
    } else {
      setIsOpenModal5(true);
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
    } else {
      setIsOpenModal5(false);
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
          onClick={() => onClickCheckRoom("학반 조회하기")}
          className={isClickedCheck === "학반 조회하기" ? "Room" : "NoneClick"}
        >
          학반 조회하기
        </span>
      </div>
      <div className="Category">
        <div onClick={() => onClickOpenModal(1)}>미술실</div>
        <Modal isOpen={isOpenModal1} onClose={() => onClickCloseModal(1)}>
          {ArtClass.map((key) => (
            <div className="ClassDetailStudentName">
              <span>{key.grade}</span>
              <span>{key.cls}</span>
              <span>{key.number}</span> &nbsp;
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(2)}>과학실</div>
        <Modal isOpen={isOpenModal2} onClose={() => onClickCloseModal(2)}>
          {ScienceClass.map((key) => (
            <div className="ClassDetailStudentName">
              <span>{key.grade}</span>
              <span>{key.cls}</span>
              <span>{key.number}</span> &nbsp;
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(3)}>모프실</div>
        <Modal isOpen={isOpenModal3} onClose={() => onClickCloseModal(3)}>
          {MobileProgramingClass.map((key) => (
            <div className="ClassDetailStudentName">
              <span>{key.grade}</span>
              <span>{key.cls}</span>
              <span>{key.number}</span> &nbsp;
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(4)}>오케실</div>
        <Modal isOpen={isOpenModal4} onClose={() => onClickCloseModal(4)}>
          {OcestaClass.map((key) => (
            <div className="ClassDetailStudentName">
              <span>{key.grade}</span>
              <span>{key.cls}</span>
              <span>{key.number}</span> &nbsp;
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
        <div onClick={() => onClickOpenModal(5)}>모둠학습실</div>
        <Modal isOpen={isOpenModal5} onClose={() => onClickCloseModal(5)}>
          {GatherClass.map((key) => (
            <div className="ClassDetailStudentName">
              <span>{key.grade}</span>
              <span>{key.cls}</span>
              <span>{key.number}</span> &nbsp;
              <span>{key.name}</span>
            </div>
          ))}
        </Modal>
      </div>
    </div>
  );
};

export default SpecialClass;
