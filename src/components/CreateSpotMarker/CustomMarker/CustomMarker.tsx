import { MarkerComponentProps } from 'react-image-marker';
import { CustomSpotMarker } from '../CreateSpotMarker.static';
import { MarkerStyled } from './CustomMarker.style';
import useModal from '../../Modal/Modal.logic';
import Modal from '../../Modal/Modal';
import { Button } from '../CreateSpotMarker.style';

interface CustomMarkerComponentProps extends MarkerComponentProps, CustomSpotMarker {
    onClick?: () => void;
}

export default function CustomMarker(props: CustomMarkerComponentProps) {
    const { name, description } = props;
    const { isOpen, toggle } = useModal();

    const handleClick = () => {
        if (isOpen === false) {
            toggle();
        }
    };

    return (
        <>
            <MarkerStyled onClick={handleClick} />

            <Modal isOpen={isOpen} toggle={toggle}>
                <Button type="button" className="close-btn" onClick={toggle}>
                    Close
                </Button>
                <h4>{name}</h4>
                <p>Description: {description}</p>
                <Button type="button">Reserve</Button>
            </Modal>
        </>
    );
}
