import React from "react";
import "../../style/Side.style/Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Side = () => {
  return (
    <div>
      <div className="SideBarWrap">
        <h1>삑</h1>
        <div className="Grade1">
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>1학년</span>
        </div>
        <div className="Grade2">
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>2학년</span>
        </div>
        <div className="Grade3">
          <FontAwesomeIcon icon={faGraduationCap} color="white" className="icon" />
          <span>3학년</span>
        </div>
      </div>
    </div>
  );
};

export default Side;
