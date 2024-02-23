import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    /* overflow-y: hidden; */
    flex: 1;
    flex-direction: column;
    /* gap: 5rem; */
    align-items: center;

    h1 {
        margin-top: 3rem;
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        border-radius: 5px;
        overflow: hidden;
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
