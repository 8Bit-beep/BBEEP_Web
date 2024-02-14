import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckClass from "./components/CheckStudent/CheckStudent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/check-class" element={<CheckClass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
