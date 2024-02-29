import styled from 'styled-components';
import { BaseButton, Container } from '../../../components/CommonStyledElements';

const UserPageMainButtonsContainer = styled(Container)`
    margin: 50px auto 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 300px;
    }
`;

const BaseButtonCreateUser = styled(BaseButton)`
    font-size: 16px;
    padding: 15px;
    background-color: var(--blue-green-light);
`;

export { UserPageMainButtonsContainer, BaseButtonCreateUser };
