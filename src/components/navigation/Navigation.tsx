import { NavLink } from 'react-router-dom';
import Burger from './burger/Burger';
import { ListItem, NavContainer, NavDiv } from './Navigation.style';

const Navigation = () => {
    return (
        <NavDiv>
            <NavContainer>
                <NavLink to={`/`} className="logo">
                    <ListItem>Logo</ListItem>
                </NavLink>

                <div style={{ flex: 1 }}></div>

                <Burger />
            </NavContainer>
        </NavDiv>
    );
};

export default Navigation;
