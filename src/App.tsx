import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { GlobalStyle } from './components/Global.style';
import { route } from './static/routes';
import { AuthProvider } from './context/AuthContext';
import AddSpotForm from './pages/CreateSpots/AddSpotForm/AddSpotForm';
import CreateSpots from './pages/CreateSpots/CreateSpotsPage';
import Navigation from './components/navigation/Navigation';
import styled from 'styled-components';

import HomeCalendar from './pages/Calendar-component/Home-calendar/Home';
import UsersPage from './pages/User/UsersPage/UsersPage';
import Register from './pages/Register/Register';
import LocationCreateForm from './pages/LocationCreate/LocationCreate';
import Reservation from './pages/Reservation/Reservation';

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
    const location = useLocation();
    const background = location.state as { background?: Location };
    return (
        <div>
            <GlobalStyle />
            <AuthProvider>
                <Navigation />
                <Routes location={background?.background || location}>
                    <Route path={route.home} element={<Home />} />
                    <Route path={`${route.location}/:id`} element={<Reservation />} />
                    <Route path={route.createLocation} element={<LocationCreateForm />} />
                    <Route path={route.calendar} element={<HomeCalendar />} />
                    <Route path={route.login} element={<Login />} />
                    <Route path={route.register} element={<Register />} />
                    <Route path={route.user} element={<UsersPage />} />
                    <Route path={route.createSpot} element={<CreateSpots />}>
                        <Route path="/spot/create" element={<AddSpotForm />} />
                    </Route>
                </Routes>
                {background?.background && (
                    <Routes>
                        <Route path={route.login} element={<Login />} />
                    </Routes>
                )}
            </AuthProvider>
        </div>
    );
}

export default App;
