import styled from 'styled-components';

export const AdminPageContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableHeader = styled.th`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
`;

export const TableCell = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

export const ListContainer = styled.div`
    background-color: var(--beige-light);
    padding: 20px;
`;

export const ListHeader = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 20px;
`;

export const ListItem = styled.li`
    display: flex;
    background-color: rgba(240, 240, 240, 0.8);
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 5px;
    backdrop-filter: blur(5px);
    gap: 10px;
`;
