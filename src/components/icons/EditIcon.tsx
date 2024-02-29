import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StyledToolTip } from '../CommonStyledElements';

interface EditIconProps {
    onClick: MouseEventHandler;
}

const BlueEditIcon = styled.span`
    color: blue;
    cursor: pointer;
    margin: 10px;
`;

const EditIcon: React.FC<EditIconProps> = ({ onClick }) => (
    <>
        <BlueEditIcon
            onClick={onClick}
            role="img"
            aria-label="Edit"
            data-tooltip-id={`component_edit`}
            data-tooltip-place="left"
        >
            🖌️
        </BlueEditIcon>
        <StyledToolTip id={`component_edit`} className="spot-info">
            {<p>Edit</p>}
        </StyledToolTip>
    </>
);

export default EditIcon;
