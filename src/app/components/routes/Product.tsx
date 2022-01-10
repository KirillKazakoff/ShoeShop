import React from 'react';
import {
    Button, ButtonGroup, Col, Row, Stack, Table,
} from 'react-bootstrap';
import SectionTitle from '../lib/SectionTitle';

export default function ProductRoute() {
    return (
        <section className='catalog-item'>
            <SectionTitle>Босоножки</SectionTitle>
            <Row>
                <Col className='col-5'>
                    <img
                        src='.././img/products/sandals_myer.jpg'
                        className='img-fluid'
                        alt=''
                    />
                </Col>
                <Col className='col-7'>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>1000046</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>PAUL ANDREW</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>Чёрный</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>Кожа</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>Лето</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>Прогулка</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Stack gap={2} className='align-items-center'>
                        <div>
                            <span className='me-2'>Размеры в наличии:</span>
                            <div className='catalog-item-size selected'>18 US</div>
                            <div className='catalog-item-size'>20 US</div>
                        </div>
                        <div>
                            <span className='me-2'>Количество:</span>
                            <ButtonGroup className='btn-group-sm pl-2'>
                                <Button variant='secondary'>-</Button>
                                <Button
                                    as='span' variant='outline-secondary'
                                    disabled
                                >
                                    1
                                </Button>
                                <Button variant='secondary'>+</Button>
                            </ButtonGroup>
                        </div>
                    </Stack>
                    <Button
                        variant='danger' size='lg'
                        className='w-100 mt-4'
                    >
                        В корзину
                    </Button>
                </Col>
            </Row>
        </section>
    );
}
