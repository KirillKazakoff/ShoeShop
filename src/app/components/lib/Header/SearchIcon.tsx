import React from 'react';
import { useNavigate } from 'react-router-dom';
import ControlsIcon from './ControlsIcon';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import {
    selectSearch,
    setSearchHidden,
    setSearchFilter,
} from '../../../redux/slices/searchSlice';

export default function SearchIcon() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const searchState = useAppSelector(selectSearch);
    const { value, isHidden } = searchState;

    const onClick = () => {
        if (isHidden) dispatch(setSearchHidden(false));
        else if (value.length === 0) dispatch(setSearchHidden(true));
        else {
            navigate('/catalog');
            dispatch(setSearchFilter());
        }
    };

    return (
        <ControlsIcon
            id='search-expander'
            className='header-controls-search'
            onClick={onClick}
        />
    );
}
