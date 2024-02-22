import { useLocation, useNavigate } from 'react-router';
import { BaseButton } from '../../../components/CommonStyledElements';
import Modal from '../../../components/Modal/Modal';
import { CustomSpotMarker } from '../../CreateSpots/AddSpotForm/AddSpotForm.static';
import { MarkerStyled } from '../../CreateSpots/CustomSpotMarker/CustomSpotMarker.style';
import { useState } from 'react';
import { route } from '../../../static/routes';

export default function SpotInfo(props: CustomSpotMarker) {
    const { name, description } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return (
        <>
            <MarkerStyled
                onClick={() => {
                    toggle();
                    navigate(`${route.createReservation}/${props.id}`, { state: { background: location } });
                }}
            />
            {isOpen && props.id && (
                <Modal>
                    <BaseButton
                        type="button"
                        className="close-btn"
                        onClick={() => {
                            toggle(), navigate(-1);
                        }}
                    >
                        Close
                    </BaseButton>
                    <h4>{name}</h4>
                    <p>Description: {description}</p>
                    <BaseButton
                        type="button"
                        onClick={() => {
                            console.log(props);
                        }}
                    >
                        Reserve
                    </BaseButton>
                </Modal>
            )}
        </>
    );
}
