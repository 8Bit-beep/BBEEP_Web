import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckStudent from "./page/CheckStudent/CheckStudent";
import CheckStudentSecond from "./page/CheckStudent/CheckStudentSecond";
import CheckStudentThird from "./page/CheckStudent/CheckStudentThird";
import NoneLoadingMain from "./page/NoneLoadingMain/NoneLoadingMain";
import Login from "./components/Login/Login";
import CheckClass from "./page/CheckClass/CheckClass";
import CheckClassSecond from "./page/CheckClass/CheckClassSecond";
import CheckClassThird from "./page/CheckClass/CheckClassThird";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
