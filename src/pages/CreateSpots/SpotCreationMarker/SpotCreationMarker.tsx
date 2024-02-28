import { SpotMarker } from '../AddSpotForm/AddSpotForm.static';
import { MarkerStyled, StyledToolTip } from './SpotCreationMarker.style';

export default function SpotCreationMarker(props: SpotMarker) {
    return (
        <>
            <MarkerStyled
                data-tooltip-id={`component_${props.id}`}
                data-tooltip-place="top"
                className={`custom-marker_${props.isPermanent}`}
            />
            <StyledToolTip id={`component_${props.id}`} className="spot-info">
                {
                    <>
                        <h4>{props.name}</h4>
                        <p>{props.description}</p>
                        <p>{props.isPermanent ? 'Spot is permanently occupied!' : null}</p>
                    </>
                }
            </StyledToolTip>
        </>
    );
}
