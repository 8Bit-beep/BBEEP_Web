import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import side from "./Components/side/side";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Side" element={<side />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
