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
        case "/check-class/first-floor":
          setIsClickCategory("1층");
          break;
        case "/check-class/second-floor":
          setIsClickCategory("2층");
          break;
        case "/check-class/third-floor":
          setIsClickCategory("3층");
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
      case "1층":
        navigate("/check-class/first-floor");
        break;
      case "2층":
        navigate("/check-class/second-floor");
        break;
      case "3층":
        navigate("/check-class/third-floor");
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
