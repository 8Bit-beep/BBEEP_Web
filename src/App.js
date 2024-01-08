import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
// import side from "./Components/side/side";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
