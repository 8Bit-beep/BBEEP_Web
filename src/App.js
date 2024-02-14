import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import LabClass from "./components/CheckClass/LabClass";
import FirstGrade from "./components/GradeCheck/FirstGrade";
import SecondGrade from "./components/GradeCheck/SecondGrade";
import ThirdGrade from "./components/GradeCheck/ThirdGrade";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
