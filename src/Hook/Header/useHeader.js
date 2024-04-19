import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeader = ({ location, navigate }) => {
  const [isClicked, setIsClicked] = useState();
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/check-student/first-grade":
        setIsClicked("학생 조회하기");
        break;
      case "/check-student/second-grade":
        setIsClicked("학생 조회하기");
        break;
      case "/check-student/third-grade":
        setIsClicked("학생 조회하기");
        break;
      case "/check-class/first-floor":
        setIsClicked("실 조회하기");
        break;
      case "/check-class/second-floor":
        setIsClicked("실 조회하기");
        break;
      case "/check-class/third-floor":
        setIsClicked("실 조회하기");
        break;
      default:
        setIsClicked("");
        break;
    }
  }, [location.pathname]);

  const handleUrl = (itemName) => {
    setIsClicked(itemName);

    switch (itemName) {
      case "학생 조회하기":
        navigate("/check-student/first-grade");
        break;
      case "실 조회하기":
        navigate("/check-class/first-floor");
        break;
      default:
        navigate("");
        break;
    }
  };

  return {
    isClicked,
    handleUrl,
  };
};

export default useHeader;
