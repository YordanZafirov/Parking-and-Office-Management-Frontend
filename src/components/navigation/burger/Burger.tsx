import { NavLink } from 'react-router-dom';
import UserRoleHOC from '../../../pages/UserRoleHOC';
import RightNav from '../right-nav/RightNav';
import useBurger from './Burger.logic';
import { BurgerDiv } from './Burger.style';

const Burger = () => {
    const { open, handleClick } = useBurger();
    return (
        <>
            <BurgerDiv open={open} onClick={handleClick}>
                <UserRoleHOC>
                    <NavLink to={`/admin`}>
                        <li>Admin</li>
                    </NavLink>
                </UserRoleHOC>
                <div></div>
                <div></div>
                <div></div>
            </BurgerDiv>
            <RightNav open={open} handleClick={handleClick} />
        </>
    );
};

export default Burger;
