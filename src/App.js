import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import LabClass from "./Components/CheckClass/LabClass";
import MainClass from "./Components/CheckClass/MainClass";
import FirstGrade from "./Components/GradeCheck/FirstGrade";
import SecondGrade from "./Components/GradeCheck/SecondGrade";
import ThirdGrade from "./Components/GradeCheck/ThirdGrade";
import SpecialClass from "./Components/CheckClass/SpecialClass";
import SERVERURL from "./Auth/ServerAddr";
import axios from "axios";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const refreshToken = async () => {
  //     try {
  //       const response = await axios.get(SERVERURL + "/auth/student/token/refresh", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
  //         },
  //       });
  //       const newAccessToken = response.data.token;
  //       localStorage.setItem("accessToken", newAccessToken);
  //       return newAccessToken;
  //     } catch (error) {
  //       console.error("Failed TokenRefresh", error);
  //       throw error;
  //     }
  //   };
  //   refreshToken();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/lab-class" element={<LabClass />} />
          <Route path="/first-grade" element={<FirstGrade />} />
          <Route path="/second-grade" element={<SecondGrade />} />
          <Route path="/third-grade" element={<ThirdGrade />} />
          <Route path="/special-class" element={<SpecialClass />} />
          <Route path="/main-class" element={<MainClass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
