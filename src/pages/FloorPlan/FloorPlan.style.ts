import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import { BaseButton } from '../../components/CommonStyledElements';
import { Link } from 'react-router-dom';

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
    padding: 20px;

    @media (max-width: 768px) {
        padding: 0;
    }
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

export const ContainerCreateSerch = styled.li`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const BaseButtonCreateLocation = styled(BaseButton)`
    font-size: 16px;
    padding: 15px;
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

export const BackButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    font-size: 30px;
    color: var(--blue-green);
    cursor: pointer;

    transition: font-size 0.3s ease-in-out;

    &:hover {
        font-size: 36px;
    }
`;

export const LinkFloorPlan = styled(Link)`
    display: inline-block;
    padding: 7px 5px 5px 12px;
    background-color: darkblue;
    color: white;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    vertical-align: middle;

    &:hover {
        background-color: blue;
    }
`;

export const ArrowIcon = styled(IoIosArrowForward)`
    font-size: 22px;
    color: white;
    vertical-align: middle;
    margin-left: 8px;
    position: relative;
    top: -2px;
`;

export const AddSpotIcon = styled.span`
    font-size: 22px;
    color: var(--blue-green-dark);
    vertical-align: middle;
    margin: 0 10px 0 10px;
    position: relative;
    top: -2px;
    cursor: pointer;
`;
