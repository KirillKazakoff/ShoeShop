import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';

type LoadButtonProps = ButtonProps;

export default function LoadButton({ children, ...props }: LoadButtonProps) {
    return (
        <div className='text-center'>
            <Button {...props} variant='outline-secondary'>
                {children}
            </Button>
        </div>
    );
}
