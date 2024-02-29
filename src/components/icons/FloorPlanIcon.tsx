import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StyledToolTip } from '../CommonStyledElements';

interface FloorPlansIconProps {
    onClick: MouseEventHandler;
}

const WhiteFloorPlansIcon = styled.span`
    cursor: pointer;
    margin: 10px;
    display: inline-block;
    vertical-align: middle;

    @media (max-width: 768px) {
        margin: 0px 0px 0px 10px;
    }
`;

const FloorPlansIcon: React.FC<FloorPlansIconProps> = ({ onClick }) => (
    <>
        <WhiteFloorPlansIcon onClick={onClick} data-tooltip-id={`component_check_floorplans`} data-tooltip-place="left">
            <img src="src/assets/icon-floor-plan.jpg" alt="Floor Plans" style={{ width: '25px', height: '25px' }} />
        </WhiteFloorPlansIcon>
        <StyledToolTip id={`component_check_floorplans`} className="spot-info">
            {<p>See all floor plans for this location</p>}
        </StyledToolTip>
    </>
);

export default FloorPlansIcon;
