/* eslint-disable react/require-default-props */
import React, { HTMLProps } from 'react';

type ControlsIconProps = HTMLProps<HTMLButtonElement>;

export default function ControlsIcon(props: ControlsIconProps) {
    const {
        id, className, children, onClick,
    } = props;

    return (
        <button
            {...props}
            id={id}
            className={`header-controls-pic ${className}`}
            onClick={onClick}
            type='button'
        >
            {children}
        </button>
    );
}
