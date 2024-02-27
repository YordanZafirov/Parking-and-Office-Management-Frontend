import { NavLink } from 'react-router-dom';
import { route } from '../../../static/routes';

import { Ul } from './RightNav.style';
import { useAuth } from '../../../context/AuthContext';
import useToken from '../../../hooks/Token/Token.hook';
import useRightNav from './RightNav.logic';

import UserRoleHOC from '../../../pages/UserRoleHOC';
import CalendarIcon from '../../../pages/ReservationSummary/CalendarIcon/CalendarIcon';

interface NavProps {
    open: boolean;
    handleClick: () => void;
}

// const StyledProfile = styled.div`
//     position: relative;
// `;

const RightNav: React.FC<NavProps> = ({ open, handleClick }) => {
    const { isAuthenticated } = useAuth();
    const decodedToken = useToken();
    const { handleCloseNav } = useRightNav(handleClick);

    return (
        <nav>
            <Ul open={open}>
                {isAuthenticated ? (
                    <>
                        <NavLink to={route.reservationSummary} className="nav-link" onClick={handleCloseNav}>
                            <CalendarIcon />
                        </NavLink>
                        <UserRoleHOC>
                            <NavLink to={`/admin`} className="nav-link" onClick={handleCloseNav}>
                                <li>Admin</li>
                            </NavLink>
                        </UserRoleHOC>

                        <NavLink to={`/user/${decodedToken?.id}`} className="nav-link" onClick={handleCloseNav}>
                            <li>Profile</li>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={route.login} className="nav-link" onClick={handleCloseNav}>
                            <li>Login</li>
                        </NavLink>
                    </>
                )}
            </Ul>
        </nav>
    );
};

export default RightNav;
