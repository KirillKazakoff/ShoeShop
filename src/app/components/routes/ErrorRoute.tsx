import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ErrorRoute() {
    return (
        <Row className='error'>
            <Col>
                <h2 className='h2 text-center'>404 Error</h2>
                <p className='pb-3 fs-3'>Something went wrong</p>
            </Col>
        </Row>
    );
}
