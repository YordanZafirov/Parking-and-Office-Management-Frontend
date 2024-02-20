import { BaseButton, PageTitle } from "../../../components/CommonStyledElements";
import Loader from "../../../components/loader/Loader";
import SearchBar from "../../../components/searchBar/SearchBar";
import UserCardsContainer from "./UserCard/UserCardsContainer";
import { UseUsersPageLogic } from "./UsersPage.logic";
import { UserPageMainButtonsContainer } from "./UsersPage.style";

export default function FarmsPage() {
    const {
      users,
      title,
      handleSearch,
      isLoading,
      handleCreateUser,
      searchPlaceholder,
    } = UseUsersPageLogic();
  
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
          {users && <UserCardsContainer users={users} />}
      </div>
    );
  }