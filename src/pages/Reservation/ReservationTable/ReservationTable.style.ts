import styled from 'styled-components';

export const ReservationTableStyle = styled.table`
    /* border-collapse: collapse; */
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
        /* border: 1px solid var(--blue-green-dark); */
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: var(--blue-green);
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

        tr:first-child td:first-child {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        tr:last-child td:first-child {
            border-bottom-left-radius: 0;
        }
        tr:last-child td:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            margin-right: 10px;
        }
    }
`;
