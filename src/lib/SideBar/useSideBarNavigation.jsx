import { useEffect, useState } from "react";

const UseSideBarNavigation = ({ location, navigate }) => {
  const [isClickCategory, setIsClickCategory] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);

  useEffect(() => {
    const handleNavigation = () => {
      switch (location.pathname) {
        case "/check-student":
          setIsClickCategory("학생 조회하기");
          break;
        case "/check-class":
          setIsClickCategory("실 조회하기");
          break;
        default:
          setIsClickCategory("");
          break;
      }
    };

    handleNavigation();
  }, [location.pathname]);

  const handleCategoryClick = (itemName) => {
    setIsClickCategory(itemName);
    switch (itemName) {
      case "학생 조회하기":
        navigate("/check-student");
        break;
      case "실 조회하기":
        navigate("/check-class");
        break;
      default:
        navigate("");
    }
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  return {
    selectedGrade,
    handleCategoryClick,
    handleGradeClick,
  };
};

export default UseSideBarNavigation;
