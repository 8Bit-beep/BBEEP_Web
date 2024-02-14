import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckClass from "./components/CheckClass/CheckClass";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/checkClass" element={<CheckClass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
