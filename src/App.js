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

function App() {
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
