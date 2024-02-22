import { useLocation, useNavigate } from 'react-router';
import { BaseButton } from '../../../components/CommonStyledElements';
import Modal from '../../../components/Modal/Modal';

export default function SpotInfo() {
    const location = useLocation();
    const spotProps = location.state.spotProps;
    const navigate = useNavigate();

    return (
        <Modal>
            <BaseButton
                type="button"
                className="close-btn"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Close
            </BaseButton>
            <h4>{spotProps.name}</h4>
            <p>Description: {spotProps.description}</p>
            <BaseButton
                type="button"
                onClick={() => {
                    console.log(spotProps);
                    navigate(-1);
                }}
            >
                Reserve
            </BaseButton>
        </Modal>
    );
}
