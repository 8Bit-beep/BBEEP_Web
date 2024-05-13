import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "src/components/Login/Login";
import NoneLoadingMain from "src/page/NoneLoadingMain/NoneLoadingMain";
import CheckStudent from "src/page/CheckStudent/CheckStudent";
import CheckStudentSecond from "src/page/CheckStudent/CheckStudentSecond";
import CheckStudentThird from "src/page/CheckStudent/CheckStudentThird";
import CheckClass from "src/page/CheckClass/CheckClass";
import CheckClassSecond from "src/page/CheckClass/CheckClassSecond";
import CheckClassThird from "src/page/CheckClass/CheckClassThird";

const router = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<NoneLoadingMain />} />
        <Route path="/check-student/first-grade" element={<CheckStudent />} />
        <Route path="/check-student/second-grade" element={<CheckStudentSecond />} />
        <Route path="/check-student/third-grade" element={<CheckStudentThird />} />
        <Route path="/check-class/first-floor" element={<CheckClass />} />
        <Route path="/check-class/second-floor" element={<CheckClassSecond />} />
        <Route path="/check-class/third-floor" element={<CheckClassThird />} />
      </Routes>
    </div>
  );
};

export default router;
