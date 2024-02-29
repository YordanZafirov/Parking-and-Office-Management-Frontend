import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StyledToolTip } from '../CommonStyledElements';

interface DeleteIconProps {
    onClick: MouseEventHandler;
}

const RedDeleteIcon = styled.span`
    color: red;
    cursor: pointer;
    margin: 10px;
`;

const DeleteIcon: React.FC<DeleteIconProps> = ({ onClick }) => (
    <>
        <RedDeleteIcon
            onClick={onClick}
            role="img"
            aria-label="Delete"
            data-tooltip-id={`component_delete`}
            data-tooltip-place="left"
        >
            ❌
        </RedDeleteIcon>
        <StyledToolTip id={`component_delete`} className="spot-info">
            {<p>Delete</p>}
        </StyledToolTip>
    </>
);

export default DeleteIcon;
