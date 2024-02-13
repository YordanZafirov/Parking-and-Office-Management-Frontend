import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
