import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectSearch } from '../../../redux/slices/searchSlice';
import useSearchChange from './useSearchChange';
import useFilter from './useSearchSubmit';
import SearchIcon from './SearchIcon';

export default function Search() {
    const searchState = useAppSelector(selectSearch);
    const onChange = useSearchChange();
    const filterItems = useFilter();
    const { value, isHidden } = searchState;

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        filterItems();
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
                    <SearchIcon />
                </Col>
            </Row>
        </Form>
    );
}
