import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StyledToolTip } from '../CommonStyledElements';

interface FloorPlansAddIconProps {
    onClick: MouseEventHandler;
}

const PlusIcon = styled.span`
    color: blue;
    cursor: pointer;
    margin: 0px 10px 10px 10px;
    font-size: 1.6em;
    display: inline-block;
    vertical-align: middle;

    @media (max-width: 768px) {
        margin: -10px 10px 0px 10px;
    }
`;

const FloorPlansAddIcon: React.FC<FloorPlansAddIconProps> = ({ onClick }) => (
    <>
        <PlusIcon
            onClick={onClick}
            role="img"
            aria-label="Edit"
            data-tooltip-id={`component_create_floorplan`}
            data-tooltip-place="left"
        >
            +
        </PlusIcon>
        <StyledToolTip id={`component_create_floorplan`} className="spot-info">
            {<p>Create new floor plan</p>}
        </StyledToolTip>
    </>
);

export default FloorPlansAddIcon;
