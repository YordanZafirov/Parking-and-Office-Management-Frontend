import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StyledToolTip } from '../CommonStyledElements';

interface DetailsIconProps {
    onClick: MouseEventHandler;
}

const WhiteDetailsIcon = styled.span`
    color: white;
    cursor: pointer;
    margin: 10px;
`;

const DetailsIcon: React.FC<DetailsIconProps> = ({ onClick }) => (
    <>
        <WhiteDetailsIcon
            onClick={onClick}
            role="img"
            aria-label="Details"
            data-tooltip-id={`component_details`}
            data-tooltip-place="left"
        >
            📄
        </WhiteDetailsIcon>
        <StyledToolTip id={`component_details`} className="spot-info">
            {<p>Edit</p>}
        </StyledToolTip>
    </>
);

export default DetailsIcon;
