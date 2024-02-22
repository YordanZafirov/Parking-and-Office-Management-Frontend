import { UserProfilePageLogic } from './UserProfilePage.logic';
import { BaseButton, BigButtonDark, BigButtonLight } from '../../../components/CommonStyledElements';
import {
    ToggleButtonsContainer,
    UpdateButtonContainer,
    UserAdditionalInfoContainer,
    UserMainInfoContainer,
    UserProfileContainer,
    UserProfilePicture,
    UserProfilePictureContainer,
} from './UserProfilePage.styles';
import { userProfileConstants } from './UserProfilePage.static';
import UserProfileInfo from './UserProfileInfo';
import defaultPicture from '../../../assets/default-profile.jpg';
import UserReservationsTable from '../../../components/UserReservationsTable/UserReservationsTable';

const UserProfilePage = () => {
    const {
        user,
        pastReservations,
        arePastReservationsLoading,
        pastReservationsRefetch,
        currentReservations,
        areCurrentReservationsLoading,
        currentReservationsRefetch,
        futureReservations,
        areFutureReservationsLoading,
        futureReservationsRefetch,
        handleUpdateUserPassword,
        handleUpdateUserProfilePicture,
        activeTab,
        handleTabClick,
        logout,
        reservationTypes,
    } = UserProfilePageLogic();
    return (
        <div>
            {user && (
                <div>
                    {/* <PageTitle>
              <TitleImage src={farmIcon} alt="Farm Icon" />
              {farm.name}
            </PageTitle> */}
                    <UserProfileContainer>
                        <UserMainInfoContainer>
                            <UserProfilePictureContainer>
                                <UserProfilePicture src={user.imgUrl ?? defaultPicture} alt="Profile" />
                                <p>{user.email}</p>
                            </UserProfilePictureContainer>
                            <UpdateButtonContainer>
                                <BigButtonLight onClick={() => handleUpdateUserProfilePicture(user.id)}>
                                    {userProfileConstants.changeProfilePictureButton}
                                </BigButtonLight>
                                <BigButtonLight onClick={() => handleUpdateUserPassword(user.id)}>
                                    {userProfileConstants.changePasswordButton}
                                </BigButtonLight>
                                <BaseButton className="remove-btn" onClick={() => logout()}>
                                    {userProfileConstants.logout}
                                </BaseButton>
                            </UpdateButtonContainer>
                        </UserMainInfoContainer>
                        <UserAdditionalInfoContainer>
                            <UserProfileInfo
                                pastReservations={pastReservations?.length ?? 0}
                                currentReservations={currentReservations?.length ?? 0}
                                futureReservations={futureReservations?.length ?? 0}
                            ></UserProfileInfo>
                        </UserAdditionalInfoContainer>
                    </UserProfileContainer>
                    <ToggleButtonsContainer>
                        <BigButtonDark
                            onClick={() => handleTabClick('past')}
                            style={{
                                fontWeight: activeTab === 'past' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'past' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {userProfileConstants.showPastReservations}
                        </BigButtonDark>

                        <BigButtonDark
                            onClick={() => handleTabClick('current')}
                            style={{
                                fontWeight: activeTab === 'current' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'current' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {userProfileConstants.showCurrentReservations}
                        </BigButtonDark>

                        <BigButtonDark
                            onClick={() => handleTabClick('future')}
                            style={{
                                fontWeight: activeTab === 'future' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'future' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {userProfileConstants.showFutureReservations}
                        </BigButtonDark>
                    </ToggleButtonsContainer>

                    {activeTab === 'past' && (
                        <UserReservationsTable
                            reservations={pastReservations}
                            isLoading={arePastReservationsLoading}
                            refetch={pastReservationsRefetch}
                            reservationType={reservationTypes.past}
                        />
                    )}
                    {activeTab === 'current' && (
                        <UserReservationsTable
                            reservations={currentReservations}
                            isLoading={areCurrentReservationsLoading}
                            refetch={currentReservationsRefetch}
                            reservationType={reservationTypes.current}
                        />
                    )}
                    {activeTab === 'future' && (
                        <UserReservationsTable
                            reservations={futureReservations}
                            isLoading={areFutureReservationsLoading}
                            refetch={futureReservationsRefetch}
                            reservationType={reservationTypes.future}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;
