import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./components/Global.style";
import { route } from "./static/routes";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/navigation/Navigation";
import styled from "styled-components";
import Location from "./pages/Location/Location";
import HomeCalendar from "./pages/Calendar-component/Home-calendar/Home";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledMain = styled.main`
  flex: 1;
  width: 100%;
`;



function App() {
    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path={route.home} element={<Home />} />
                      <Route path={route.location} element={<Location />} />
                                              <Route path={route.calendar} element={<HomeCalendar />} />
                        <Route path={route.login} element={<Login />} />

                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
