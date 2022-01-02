/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { BoxProps } from '../../primitives/rebassTypes';
import { boxCompose } from '../../primitives/styledCompose';

type IconProps = BoxProps;

const StyledControlsIcon = styled.div<BoxProps>`
    height: 32px;
    width: 32px;
    margin: 0 10px;
    background-image: url('../../../../img/header-controls-sprite.png');
    background-repeat: no-repeat;
    cursor: pointer;
    ${boxCompose()};
`;

export default function ControlsIcon({ ...props }: IconProps) {
    return <StyledControlsIcon {...props} />;
}
