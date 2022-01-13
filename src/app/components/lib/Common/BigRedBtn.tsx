import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';

type AddButtonProps = ButtonProps;

export default function ToCartBtn({ children, ...props }: AddButtonProps) {
    return (
        <Button
            variant='danger' size='lg'
            className='w-100 mt-4' {...props}
        >
            {children}
        </Button>
    );
}
