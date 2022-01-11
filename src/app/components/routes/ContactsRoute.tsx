import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContactsRoute() {
    return (
        <Container>
            <Row>
                <Col>
                    <section className='top-sales fs-5'>
                        <h2 className='text-center h2'>Контакты</h2>
                        <p className='mb-5'>
                            Наш головной офис расположен в г.Москва, по адресу: Варшавское
                            шоссе, д. 17, бизнес-центр W Plaza.
                        </p>
                        <h4 className='text-center h4 mb-3'>Координаты для связи:</h4>
                        <p>
                            Телефон:
                            <a href='tel:+7-495-790-35-03'>+7 495 79 03 5 03</a>
                            (ежедневно: с 09-00 до 21-00)
                        </p>
                        <p>
                            Email:
                            <a href='mailto:office@bosanoga.ru'>office@bosanoga.ru</a>
                        </p>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
