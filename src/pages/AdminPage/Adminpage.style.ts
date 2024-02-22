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
    border-radius: 80px;
`;

export const LocationTableStyle = styled.table`
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;

    caption {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .table-head {
        background-color: var(--beige-light);
    }

    th,
    td {
        background-color: var(--blue-green-light);
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:first-child th:first-child {
        border-top-left-radius: 10px;
    }
    tr:first-child th:last-child {
        border-top-right-radius: 10px;
    }
    tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
    }
    tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
    }

    button {
        background-color: var(--beige);
        color: var(--grey-dark);
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--beige-light);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        border-collapse: unset;

        th {
            display: none;
        }

        td {
            display: block;
            text-align: left;
            border: none;

            button {
                margin: 0 auto;
                display: block;
            }
        }

        td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            margin-right: 10px;
        }
    }
`;
