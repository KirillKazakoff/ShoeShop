import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Preloader from '../lib/Preloader';

export default function Main() {
    return (
        <Container as="main">
            <Row>
                <Col>
                    <div className="banner">
                        <img
                            src="./img/banner.jpg"
                            className="img-fluid"
                            alt="К весне готовы!"
                        />
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>

                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>
                        <Preloader />
                    </section>

                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        <Preloader />
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
