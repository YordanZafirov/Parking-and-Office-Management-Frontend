import styled from 'styled-components';

const HeaderModal = styled.h3`
    padding: 20px;
`;

const ItemsModal = styled.div`
    font-weight: 500;
    font-size: 18px;
    color: var(--white-smoke);
    display: block;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
`;

const LabelModal = styled.div`
    margin-left: 15px;
`;

const InputModal = styled.input`
    font-size: 16px;
    font-weight: 400;
    width: 250px;
    color: var(--dark-grey);
    background: var(white-smoke);
    border: 1px solid gray;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    margin-bottom: 1rem;
`;

const ErrorStyles = styled.p`
    color: orange;
    font-size: 16px;
    padding-bottom: 10px;
`;

export { ErrorStyles, InputModal, LabelModal, ItemsModal, HeaderModal };
