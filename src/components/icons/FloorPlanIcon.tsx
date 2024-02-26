import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

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
    <WhiteFloorPlansIcon onClick={onClick}>
        <img src="src/assets/icon-floor-plan.jpg" alt="Floor Plans" style={{ width: '25px', height: '25px' }} />
    </WhiteFloorPlansIcon>
);

export default FloorPlansIcon;
