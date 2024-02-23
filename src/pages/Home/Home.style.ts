import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    /* background-color: #f5f5f5; */

    h1 {
        margin-top: 3rem;
        text-align: center;
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    li {
        transition: transform 0.3s ease;
        cursor: pointer;
        margin: 10px;
        width: 400px;
        &:hover {
            transform: translateY(-5px);
        }
    }

    a {
        display: block;
        text-decoration: none;
        color: #000;
        text-align: center;
    }
`;
