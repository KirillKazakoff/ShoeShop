import React from 'react';
import ControlsIcon from './ControlsIcon';

type SearchButtonProps = { searchSubmit: () => void };

export default function SearchButton({ searchSubmit }: SearchButtonProps) {
    return (
        <ControlsIcon
            id='search-expander'
            className='header-controls-search'
            onClick={searchSubmit}
        />
    );
}
