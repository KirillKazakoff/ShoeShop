import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';

export default function CheckoutSubmit({ children }: ButtonProps) {
    return (
        <Button variant='outline-secondary' type='submit'>
            {children}
        </Button>
    );
}
