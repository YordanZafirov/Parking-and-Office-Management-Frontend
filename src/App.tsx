import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { GlobalStyle } from './components/Global.style';
import { route } from './static/routes';
import { AuthProvider } from './context/AuthContext';
import AddSpotForm from './pages/CreateSpots/AddSpotForm/AddSpotForm';
import CreateSpots from './pages/CreateSpots/CreateSpotsPage';
import Navigation from './components/navigation/Navigation';

import HomeCalendar from './pages/CalendarComponent/Home-calendar/Home';
import UsersPage from './pages/User/UsersPage/UsersPage';
import Register from './pages/Register/Register';
import LocationCreateForm from './pages/LocationCreate/LocationCreate';
import Reservation from './pages/Reservation/Reservation';
import CreateReservation from './pages/CreateReservation/CreateReservationPage';
import UserProfilePage from './pages/User/UserProfilePage/UserProfilePage';
import AdminPage from './pages/AdminPage/Adminpage';
import ChangePasswordForm from './pages/User/ChangePasswordForm/ChangePasswordForm';
import SpotInfo from './pages/CreateReservation/SpotInfo/SpotInfo';
import ChangeProfilePictureForm from './pages/User/ChangeProfilePictureForm/ChangeProfilePictureForm';
import NotFound from './pages/NotFound/NotFound';
// import EditLocationModal from './pages/AdminPage/AdminListModal/EditModal';
// import DeleteLocationModal from './pages/AdminPage/AdminListModal/DeleteModal';


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
                    <Route path={`${route.user}/:id`} element={<UserProfilePage />}>
                        <Route path={`${route.user}/:id/change-password`} element={<ChangePasswordForm />} />
                        <Route path={`${route.user}/:id/change-picture`} element={<ChangeProfilePictureForm />} />
                    </Route>

                    <Route path={route.admin} element={<AdminPage />}>
                        {/* <Route path=":id/edit" element={<EditLocationModal />} />
                        <Route path=":id/delete" element={<DeleteLocationModal />} /> */}
                    </Route>

                    <Route path={route.createSpot} element={<CreateSpots />}>
                        <Route path="/spot/create" element={<AddSpotForm />} />
                    </Route>
                    <Route path={route.createReservation} element={<CreateReservation />}>
                        <Route path="/create-reservation/:id" element={<SpotInfo />} />
                    </Route>
                    <Route path={route.notFound} element={<NotFound />} />
                </Routes>
                {background?.background && (
                    <Routes>
                        <Route path="/spot/create" element={<AddSpotForm />} />
                        <Route path={`${route.user}/:id/change-password`} element={<ChangePasswordForm />} />
                        <Route path={`${route.user}/:id/change-picture`} element={<ChangeProfilePictureForm />} />
                        <Route path="/create-reservation/:id" element={<SpotInfo />} />
                    </Routes>
                )}
            </AuthProvider>
        </div>
    );
}

export default App;
