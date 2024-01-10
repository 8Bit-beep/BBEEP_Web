import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import LabClass from "./Components/CheckClass/LabClass";
import FirstGrade from "./Components/GradeCheck/FirstGrade";
import SecondGrade from "./Components/GradeCheck/SecondGrade";
import ThirdGrade from "./Components/GradeCheck/ThirdGrade";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="lab-class" element={<LabClass />} />
          <Route path="first-grade" element={<FirstGrade />} />
          <Route path="second-grade" element={<SecondGrade />} />
          <Route path="third-grade" element={<ThirdGrade />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
