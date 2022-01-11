import { Card, CardProps, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { ContentType } from '../../../data/initContent';

type ItemShortProps = CardProps & {
    content: ContentType;
};

export default function ItemShort({ content }: ItemShortProps) {
    const id = content.id.toString();
    return (
        <Card id={id} className='h-100'>
            <Card.Img
                src={content.images[0]}
                className='card-img-top img-fluid bg-light'
                alt={content.title}
            />
            <Card.Body>
                <Card.Text className='w-100'>{content.title}</Card.Text>
                <Card.Text className='w-100'>{content.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <NavLink to={`product/:${id}`}>
                    <Button variant='outline-secondary' className='align-self-end'>
                        Заказать
                    </Button>
                </NavLink>
            </Card.Footer>
        </Card>
    );
}
