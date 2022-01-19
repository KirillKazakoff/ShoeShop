import React from 'react';
import { Form } from 'react-bootstrap';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectSearch } from '../../../redux/slices/searchSlice';
import useSearchChange from './useSearchChange';

export default function Search() {
    const searchState = useAppSelector(selectSearch);
    const { value, isHidden } = searchState;
    const onChange = useSearchChange();
    const onSubmit = (e: React.SyntheticEvent) => e.preventDefault();

    return (
        <Form
            hidden={isHidden}
            className='header-controls-search-form'
            onSubmit={onSubmit}
        >
            <Form.Control
                placeholder='Поиск' value={value}
                onChange={onChange}
            />
        </Form>
    );
}
