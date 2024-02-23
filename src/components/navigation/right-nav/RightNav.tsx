import { NavLink } from 'react-router-dom';
import { route } from '../../../static/routes';

import { Ul } from './RightNav.style';
// import { PopoverContainer, PopoverContent, PopoverLink, ProfileSpan } from './Popover.style';
import { useAuth } from '../../../context/AuthContext';
import useToken from '../../../hooks/Token/Token.hook';

import UserRoleHOC from '../../../pages/UserRoleHOC';

interface NavProps {
    open: boolean;
    handleClick: () => void;
}

// const StyledProfile = styled.div`
//     position: relative;
// `;

const RightNav: React.FC<NavProps> = ({ open, handleClick }) => {
    const { isAuthenticated, logout } = useAuth();
    const decodedToken = useToken();
    // const { showPopover, handleProfileClick, handlePopoverClose, handleCloseNav } = useRightNav(handleClick);

    return (
        <nav>
            <Ul open={open}>
                {isAuthenticated ? (
                    <>
                        <UserRoleHOC>
                            <NavLink to={`/admin`}>
                                <li>Admin</li>
                            </NavLink>
                        </UserRoleHOC>

                        <NavLink to={`/user/${decodedToken?.id}`}>
                            <li>Profile</li>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={route.login}>
                            <li>Login</li>
                        </NavLink>
                    </>
                )}
            </Ul>
        </nav>
    );
};

export default RightNav;
