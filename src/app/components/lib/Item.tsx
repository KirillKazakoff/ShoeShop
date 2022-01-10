import { Card, CardProps, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { ContentType } from '../../data/initContent';

type ItemProps = CardProps & {
    content: ContentType;
};

export default function Item({ content }: ItemProps) {
    return (
        <Card id={content.id.toString()} className='h-100'>
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
                <NavLink to='/product'>
                    <Button variant='outline-secondary' className='align-self-end'>
                        Заказать
                    </Button>
                </NavLink>
            </Card.Footer>
        </Card>
    );
}
