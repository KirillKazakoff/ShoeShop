import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { selectSearch, setSearchInput } from '../../../redux/slices/searchSlice';
import { OnChangeField } from '../../../redux/useChange';

export default function Search() {
    // const sera
    const dispatch = useAppDispatch();
    const searchState = useAppSelector(selectSearch);
    const { value, isHidden } = searchState;

    const onChange: OnChangeField = (e) => {
        dispatch(setSearchInput(e.currentTarget.value));
    };

    return (
        <Form hidden={isHidden} className='header-controls-search-form'>
            <Form.Control
                placeholder='Поиск' value={value}
                onChange={onChange}
            />
        </Form>
    );
}
