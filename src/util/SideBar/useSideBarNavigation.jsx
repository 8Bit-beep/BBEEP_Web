import { useEffect, useState } from "react";

const UseSideBarNavigation = ({ location, navigate }) => {
  const [isClickCategory, setIsClickCategory] = useState("");

  useEffect(() => {
    const handleNavigation = () => {
      switch (location.pathname) {
        case "/check-student/first-grade":
          setIsClickCategory("1학년");
          break;
        case "/check-student/second-grade":
          setIsClickCategory("2학년");
          break;
        case "/check-student/third-grade":
          setIsClickCategory("3학년");
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
      case "1학년":
        navigate("/check-student/first-grade");
        break;
      case "2학년":
        navigate("/check-student/second-grade");
        break;
      case "3학년":
        navigate("/check-student/third-grade");
        break;
      default:
        navigate("");
        break;
    }
  };

  return {
    isClickCategory,
    handleCategoryClick,
  };
};

export default UseSideBarNavigation;
