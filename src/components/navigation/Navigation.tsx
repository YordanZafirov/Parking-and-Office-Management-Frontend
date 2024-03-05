import { NavLink } from 'react-router-dom';
import Burger from './burger/Burger';
import { NavContainer, NavDiv } from './Navigation.style';

const Navigation = () => {
    return (
        <NavDiv>
            <NavContainer>
                <NavLink to={`/`} className="logo">
                    <p>Home</p>
                </NavLink>

                <div style={{ flex: 1 }}></div>

                <Burger />
            </NavContainer>
        </NavDiv>
    );
};

export default Navigation;

// comment
