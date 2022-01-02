import React from 'react';
import { Badge, Form, Stack } from 'react-bootstrap';
import ControlsIcon from './ControlsIcon';

export default function Controls() {
    return (
        <Stack direction="horizontal" gap={3}>
            <ControlsIcon id="search-expander" cls="header-controls-search" />
            <ControlsIcon cls="header-controls-cart">
                <Badge className="header-controls-cart-full">1</Badge>
            </ControlsIcon>
            <Form className="header-controls-search-form form-inline invisible">
                <Form.Control placeholder="Поиск"></Form.Control>
            </Form>
        </Stack>
    );
}
