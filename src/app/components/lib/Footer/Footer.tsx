import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import FooterNav from './FooterNav';
import FooterCards from './FooterCards';
import FooterCopyright from './FooterCopyright';
import FooterContacts from './FooterContacts';

export default function Footer() {
    return (
        <footer className='bg-light footer'>
            <Row>
                <Col>
                    <FooterNav />
                </Col>
                <Col>
                    <FooterCards />
                    <FooterCopyright />
                </Col>
                <Col className='text-right'>
                    <FooterContacts />
                </Col>
            </Row>
        </footer>
    );
}
