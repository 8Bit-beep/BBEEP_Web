import React from "react";
import "../../style/Side.style/Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Side = () => {
  return (
    <div>
      <div className="SideBarWrap">
        <h1>삑</h1>
        <div>
          <FontAwesomeIcon icon={faGraduationCap} color="red" width={"1vw"} height={"1vh"} />
          <div className="Grade1">1학년</div>
        </div>

        <div className="Grade2">2학년</div>
        <div className="Grade3">3학년</div>
      </div>
    </div>
  );
};

export default Side;
