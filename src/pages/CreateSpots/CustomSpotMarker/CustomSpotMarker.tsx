import { SpotMarker } from '../AddSpotForm/AddSpotForm.static';
import { MarkerStyled, StyledToolTip } from './CustomSpotMarker.style';
import { route } from '../../../static/routes';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function CustomMarker(props: SpotMarker) {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    return (
        <>
            <MarkerStyled
                data-tooltip-id={`component_${props.id}`}
                data-tooltip-place="top"
                className={`custom-marker_${props.isPermanent}`}
                onClick={() => {
                    navigate(`${route.floorPlan}/${id}/${props.id}`, {
                        state: { background: location, spotProps: props },
                    });
                    console.log('props', props);
                }}
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
