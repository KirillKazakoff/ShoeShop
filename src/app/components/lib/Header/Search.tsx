import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { selectSearch, setSearchHidden } from '../../../redux/slices/searchSlice';
import useSearchChange from './useSearchChange';
import useFilter from './useSearchSubmit';
import SearchButton from './SearchButton';

export default function Search() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchState = useAppSelector(selectSearch);
    const onChange = useSearchChange();
    const filterItems = useFilter();
    const { value, isHidden } = searchState;

    const searchSubmit = () => {
        if (isHidden) dispatch(setSearchHidden(false));
        else if (value.length === 0) dispatch(setSearchHidden(true));
        else {
            navigate('/catalog');
            filterItems();
        }
        filterItems();
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        searchSubmit();
    };

    return (
        <Form
            className={!isHidden ? 'header-controls-search-form' : ''}
            onSubmit={onSubmit}
        >
            <Row className='gx-1 align-items-center'>
                <Col xs={isHidden ? 0 : 10}>
                    <Form.Control
                        placeholder='Поиск'
                        value={value}
                        onChange={onChange}
                        hidden={isHidden}
                    />
                </Col>
                <Col xs={isHidden ? 12 : 2}>
                    <SearchButton searchSubmit={searchSubmit} />
                </Col>
            </Row>
        </Form>
    );
}
