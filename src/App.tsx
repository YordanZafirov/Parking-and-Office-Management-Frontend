import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./components/Global.style";
import { route } from "./static/routes";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path={route.home} element={<Home />} />
            <Route path={route.login} element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
