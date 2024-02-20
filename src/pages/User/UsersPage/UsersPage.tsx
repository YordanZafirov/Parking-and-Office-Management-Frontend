import { BaseButton, PageTitle } from "../../../components/CommonStyledElements";
import Loader from "../../../components/loader/Loader";
import SearchBar from "../../../components/searchBar/SearchBar";
import UserCardsContainer from "./UserCard/UserCardsContainer";
import { useUsersPageLogic } from "./UsersPage.logic";
import { UserPageMainButtonsContainer } from "./UsersPage.style";

const UsersPage = () => {
    const {
      users,
      title,
      handleSearch,
      isLoading,
      handleCreateUser,
      handleDeleteUser,
      searchPlaceholder,
    } = useUsersPageLogic();
  
    if(isLoading){
        return (
            <Loader/>
        )
    }

    return (
      <div>
          <PageTitle>
            {/* <TitleImage src={farmIcon} alt="Farm Icon" /> */}
            {title}
          </PageTitle>
          <UserPageMainButtonsContainer>
            <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
            <BaseButton onClick={handleCreateUser}>Create User</BaseButton>
          </UserPageMainButtonsContainer>
          {users && <UserCardsContainer users={users} deleteUser={handleDeleteUser} />}
      </div>
    );
  }

  export default UsersPage;