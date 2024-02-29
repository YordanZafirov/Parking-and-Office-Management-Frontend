import styled from 'styled-components';

export const NavDiv = styled.div`
    background: #fff;
    width: 100%;
    height: 4rem;
    padding: 1rem 0;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;

    .logo {
        font-size: 1.2rem;
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 768px) {
        .logo {
            padding: 0;
        }
    }
`;

export const NavContainer = styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-weight: 700;
    }
`;
