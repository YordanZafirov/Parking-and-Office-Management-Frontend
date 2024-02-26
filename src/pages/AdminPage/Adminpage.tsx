import { Location } from '../Home/Home.static';
import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';
import { BaseButtonCreateLocation, ContainerCreateSerch, ListContainer } from './Adminpage.style';
import EditIcon from '../../components/icons/EditIcon';
import DeleteIcon from '../../components/icons/DeleteIcon';
import useAdminPage from './AdminPage.logic';
import useModal from '../../components/ModalList/useModal';
import useFilter from '../../utils/search';
import DeleteLocationModal from './AdminListModal/DeleteModal';
import EditLocationModal from './AdminListModal/EditModal';
import SearchBar from '../../components/searchBar/SearchBar';
import { LocationData } from './AdminPage.static';
import DetailsIcon from '../../components/icons/DetailsIcon';
import { UserReservationsTableStyle } from '../../components/UserReservationsTable/UserReservationsTable.styles';

const AdminPage = () => {
    const navigate = useNavigate();

    const handleCreateLocationClick = () => {
        navigate('/createLocation');
    };

    const {
        locations,
        isLoading,
        error,
        onDeleteClick,
        onEditClick,
        setCurrentLocationName,
        setCurrentLocationCity,
        setCurrentLocationAddress,
        onDeleteConfirm,
        onEditConfirm,
        originalLocationName,
        originalLocationCity,
        originalLocationAddress,
    } = useAdminPage();

    const { filteredItems, setSearchQuery } = useFilter<Location>({ items: locations || [] });
    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();
    const { isVisible: isEditModalVisible, showModal: showEditModal, hideModal: hideEditModal } = useModal();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error loading locations</div>;
    }

    return (
        <ListContainer>
            <ContainerCreateSerch>
                <BaseButtonCreateLocation
                    onClick={handleCreateLocationClick}
                    style={{
                        backgroundColor: `var(--blue-green-light)`,
                    }}
                >
                    Create Location
                </BaseButtonCreateLocation>

                <SearchBar placeholder="Search by locations" onSearch={setSearchQuery} />
            </ContainerCreateSerch>

            <UserReservationsTableStyle>
                <caption>Location List</caption>
                <thead>
                    <tr>
                        <th className="table-head">Name</th>
                        <th className="table-head">City</th>
                        <th className="table-head">Address</th>
                        <th className="table-head">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((location: LocationData) => (
                            <tr key={location.id}>
                                <td data-label="Name:">{location.name}</td>
                                <td data-label="City:">{location.city}</td>
                                <td data-label="Address:">{location.address}</td>
                                <td>
                                    <DetailsIcon
                                        onClick={() => {
                                            navigate('/floorPlan', { state: { locationId: location.id || '' } });
                                        }}
                                    />
                                    <EditIcon
                                        onClick={() => {
                                            onEditClick(
                                                location.id || '',
                                                location.name || '',
                                                location.city || '',
                                                location.address || '',
                                            );
                                            showEditModal();
                                        }}
                                    />
                                    <DeleteIcon
                                        onClick={() => {
                                            onDeleteClick(location.id || '');
                                            showDeleteModal();
                                        }}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>No Locations available</td>
                        </tr>
                    )}
                </tbody>
            </UserReservationsTableStyle>

            {isDeleteModalVisible && (
                <DeleteLocationModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
            {isEditModalVisible && (
                <EditLocationModal
                    isVisible={isEditModalVisible}
                    hideModal={hideEditModal}
                    onConfirm={onEditConfirm}
                    currentLocationName={originalLocationName}
                    currentLocationCity={originalLocationCity}
                    currentLocationAddress={originalLocationAddress}
                    setCurrentLocationName={setCurrentLocationName}
                    setCurrentLocationCity={setCurrentLocationCity}
                    setCurrentLocationAddress={setCurrentLocationAddress}
                />
            )}
        </ListContainer>
    );
};

export default AdminPage;
