import { Location } from '../Home/Home.static';
import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';
import { List, ListContainer, ListHeader, ListItem } from './Adminpage.style';
import { ButtonContainer } from '../../components/icons/ButtonContainer';
import EditIcon from '../../components/icons/EditIcon';
import DeleteIcon from '../../components/icons/DeleteIcon';
import useAdminPage from './AdminPage.logic';
import useModal from '../../components/ModalList/useModal';
import useFilter from '../../utils/search';
import DeleteLocationModal from './AdminListModal/DeleteModal';
import EditLocationModal from './AdminListModal/EditModal';
import SearchBar from '../../components/searchBar/SearchBar';

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
            <button onClick={handleCreateLocationClick}>Create Location</button>
            <ListHeader>Location List</ListHeader>
            <SearchBar placeholder="Search by locations" onSearch={setSearchQuery} />
            <List>
                {Array.isArray(filteredItems) && filteredItems.length > 0 ? (
                    filteredItems.map((location) => (
                        <ListItem key={location.id}>
                            {location.name}
                            {location.city}
                            {location.address}

                            <ButtonContainer>
                                <EditIcon
                                    onClick={() => {
                                        onEditClick(location.id || '', location.name, location.city, location.address);
                                        showEditModal();
                                    }}
                                />
                                <DeleteIcon
                                    onClick={() => {
                                        onDeleteClick(location.id || '');
                                        showDeleteModal();
                                    }}
                                />
                            </ButtonContainer>
                        </ListItem>
                    ))
                ) : (
                    <ListItem>No Locations available</ListItem>
                )}
            </List>

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
