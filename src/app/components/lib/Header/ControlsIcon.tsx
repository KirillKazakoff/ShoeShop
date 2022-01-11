/* eslint-disable react/require-default-props */
import React from 'react';

type ControlsIconProps = {
    id?: string;
    cls?: string;
    children?: React.ReactNode;
};

export default function ControlsIcon({ id, cls, children }: ControlsIconProps) {
    return (
        <div id={id} className={`header-controls-pic ${cls}`}>
            {children}
        </div>
    );
}
