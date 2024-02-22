import { NavLink } from 'react-router-dom';
import Burger from './burger/Burger';
import { ListItem, NavDiv } from './Navigation.style';

const Navigation = () => {
    return (
        <NavDiv>
            <NavLink to={`/`} className="logo">
                <ListItem>Logo</ListItem>
            </NavLink>

            <Burger />
        </NavDiv>
    );
};

export default Navigation;
