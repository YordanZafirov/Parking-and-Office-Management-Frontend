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

    .logo {
        padding: 15px 0;
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 768px) {
        .logo {
            padding: 0;
        }
    }
`;

export const ListItem = styled.p`
    a {
        text-decoration: none;
        color: inherit;
    }
`;
