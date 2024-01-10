import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import LabClass from "./Components/CheckClass/LabClass";
import MainClass from "./Components/CheckClass/MainClass";
import FirstGrade from "./Components/GradeCheck/FirstGrade";
import SecondGrade from "./Components/GradeCheck/SecondGrade";
import ThirdGrade from "./Components/GradeCheck/ThirdGrade";
import MainClass from "./Components/CheckClass/MainClass";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
<<<<<<< Updated upstream
          <Route path="/lab-class" element={<LabClass />} />
          <Route path="/first-grade" element={<FirstGrade />} />
          <Route path="/second-grade" element={<SecondGrade />} />
          <Route path="/third-grade" element={<ThirdGrade />} />
=======
          <Route path="lab-class" element={<LabClass />} />
          <Route path="first-grade" element={<FirstGrade />} />
          <Route path="second-grade" element={<SecondGrade />} />
          <Route path="third-grade" element={<ThirdGrade />} />
>>>>>>> Stashed changes
          <Route path="/main-class" element={<MainClass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
