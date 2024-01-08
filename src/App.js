import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import CheckClass from "./Components/CheckClass/CheckClass";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/check-class/first-grade" element={<CheckClass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
