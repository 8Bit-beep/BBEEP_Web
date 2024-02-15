import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckStudent from "./page/CheckStudent/CheckStudent";
import CheckStudentSecond from "./page/CheckStudent/CheckStudentSecond";
import NoneLoadingMain from "./page/NoneLoadingMain/NoneLoadingMain";
import Login from "./components/Login/Login";
import CheckStudentThird from "./page/CheckStudent/CheckStudentThird";
import CheckClass from "./page/CheckClass/CheckClassProject";

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
          <Route path="/check-class/project" element={<CheckClass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
