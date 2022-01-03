import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import FooterNav from '../lib/Footer/FooterNav';
import FooterCards from '../lib/Footer/FooterCards';
import FooterCopyright from '../lib/Footer/FooterCopyright';
import FooterContacts from '../lib/Footer/FooterContacts';

export default function FooterR() {
    return (
        <Container className="bg-light footer">
            <Row>
                <Col>
                    <FooterNav />
                </Col>
                <Col>
                    <FooterCards />
                    <FooterCopyright />
                </Col>
                <Col className="text-right">
                    <FooterContacts />
                </Col>
            </Row>
        </Container>
    );
}
