import React from 'react';

import ControlsIcon from './ControlsIcon';

export default function Controls() {
    return (
        <div className="header-controls-pics">
            <ControlsIcon id="search-expander" cls="header-controls-search" />

            <ControlsIcon cls="header-controls-cart">
                <div className="header-controls-cart-full">1</div>
                <div className="header-controls-cart-menu" />
            </ControlsIcon>
        </div>
    );
}
