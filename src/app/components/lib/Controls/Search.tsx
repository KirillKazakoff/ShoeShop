import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { BoxProps } from '../../primitives/rebassTypes';
import ControlsIcon from './ControlsIcon';

const StyledSearchForm = styled.form<BoxProps>`
    position: absolute;
    right: 65px;
    top: calc(50% - 19px);
    display: block;
    width: 230px;
    height: 40px;
    padding: 0 20px;
    background: #ffffff;
    box-shadow: 0px 0px 10px #d4e4e6;
    border-radius: 50px;
    text-align: right;
`;

export default function Search({ ...props }) {
    return (
        <StyledSearchForm {...props}>
            <ControlsIcon
                zIndex={1}
                id="search-expander"
                backgroundPosition="-64px 0px"
                position="relative"
            />
            <Form id="search-form" className="header-controls-search-form">
                <Form.Control placeholder="Поиск" />
            </Form>
        </StyledSearchForm>
    );
}
