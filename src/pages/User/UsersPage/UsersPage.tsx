import { PageTitle } from '../../../components/CommonStyledElements';
import Loader from '../../../components/loader/Loader';
import SearchBar from '../../../components/searchBar/SearchBar';
import UserCardsContainer from './UserCard/UserCardsContainer';
import { useUsersPageLogic } from './UsersPage.logic';
import { BaseButtonCreateUser, UserPageMainButtonsContainer } from './UsersPage.style';

const UsersPage = () => {
    const { users, title, handleSearch, isLoading, handleCreateUser, handleDeleteUser, searchPlaceholder } =
        useUsersPageLogic();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <UserPageMainButtonsContainer>
                <BaseButtonCreateUser onClick={handleCreateUser}>Create User</BaseButtonCreateUser>
                <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
            </UserPageMainButtonsContainer>
            <PageTitle>{title}</PageTitle>
            {users && <UserCardsContainer users={users} deleteUser={handleDeleteUser} />}
        </div>
    );
};

export default UsersPage;
