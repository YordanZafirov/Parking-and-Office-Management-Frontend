import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
                        {/* <NavLink
              className="nav-link"
              to={route.client}
              onClick={handleCloseNav}
            >
              <li>Clients</li>
            </NavLink>
            <NavLink
              className="nav-link"
              to={route.product}
              onClick={handleCloseNav}
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              className="nav-link"
              to={route.warehouse}
              onClick={handleCloseNav}
            >
              <li>Warehouses</li>
            </NavLink>
            <NavLink
              className="nav-link"
              to={route.order}
              onClick={handleCloseNav}
            >
              <li>Orders</li>
            </NavLink>
            <NavLink
              className="nav-link"
              to={route.report}
              onClick={handleCloseNav}
            >
              <li>Reports</li>
            </NavLink> */}
                        <UserRoleHOC>
                            <NavLink to={`/admin`}>
                                <li>Admin</li>
                            </NavLink>
                        </UserRoleHOC>

                        <NavLink to={`/user/${decodedToken?.id}`}>
                            <li>Profile</li>
                        </NavLink>
                        {/* <StyledProfile>
                            <ProfileSpan onClick={handleProfileClick}>
                                <li>Profile</li>
                            </ProfileSpan>
                            {showPopover && (
                                <PopoverContainer show={showPopover}>
                                    <PopoverContent id="popover-content">
                                        <div>Email: {decodedToken?.email}</div>
                                        <div>Role: {decodedToken?.role}</div>
                                        <PopoverLink
                                            className="logout"
                                            to={route.login}
                                            onClick={() => {
                                                logout();
                                                handlePopoverClose();
                                            }}
                                        >
                                            Logout
                                        </PopoverLink>
                                    </PopoverContent>
                                </PopoverContainer>
                            )}
                        </StyledProfile> */}
                    </>
                ) : (
                    <>
                        {' '}
                        {/* <NavLink to={route.register} onClick={handleCloseNav}>
              <li>Register</li>
            </NavLink> */}
                        <NavLink to={route.login} onClick={handleCloseNav}>
                            <li>Login</li>
                        </NavLink>
                    </>
                )}
            </Ul>
        </nav>
    );
};

export default RightNav;
