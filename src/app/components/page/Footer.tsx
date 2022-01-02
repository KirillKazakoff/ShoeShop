import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RouteLink from '../lib/RouteLink';
import { Nav, Stack } from 'react-bootstrap';

export default function FooterR() {
    return (
        <Container className="bg-light footer">
            <Row>
                <Col>
                    <section>
                        <h5>Информация</h5>
                        <Nav className="flex-column">
                            <RouteLink to="/about">О магазине</RouteLink>
                            <RouteLink to="/contacts">Контакты</RouteLink>
                            <RouteLink to="/catalog">Каталог</RouteLink>
                        </Nav>
                    </section>
                </Col>
                <Col>
                    <section>
                        <h5>Принимаем к оплате:</h5>
                        <div className="footer-pay">
                            <div className="footer-pay-systems footer-pay-systems-paypal" />
                            <div className="footer-pay-systems footer-pay-systems-master-card" />
                            <div className="footer-pay-systems footer-pay-systems-visa" />
                            <div className="footer-pay-systems footer-pay-systems-yandex" />
                            <div className="footer-pay-systems footer-pay-systems-webmoney" />
                            <div className="footer-pay-systems footer-pay-systems-qiwi" />
                        </div>
                    </section>
                    <section>
                        <div className="footer-copyright">
                            2009-2019 © BosaNoga.ru — модный интернет-магазин
                            обуви и аксессуаров. Все права защищены.
                            <br />
                            Доставка по всей России!
                        </div>
                    </section>
                </Col>
                <Col className="text-right">
                    <section className="footer-contacts">
                        <h5>Контакты:</h5>
                        <a
                            className="footer-contacts-phone"
                            href="tel:+7-495-790-35-03">
                            +7 495 79 03 5 03
                        </a>
                        <span className="footer-contacts-working-hours">
                            Ежедневно: с 09-00 до 21-00
                        </span>
                        <a
                            className="footer-contacts-email"
                            href="mailto:office@bosanoga.ru">
                            office@bosanoga.ru
                        </a>
                        <Stack className="mt-2 bg-light">
                            <div className="footer-social-link footer-social-link-twitter" />
                            <div className="footer-social-link footer-social-link-vk" />
                        </Stack>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}