import React from 'react';
import { Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ContentTypeFull, ContentTypeCart } from '../../../redux/dataTypes';
import Amount from './Amount';
import Sizes from './Sizes';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectActiveSize, selectAmount } from '../../../redux/slices/productFormSlice';
import BigRedBtn from '../Common/BigRedBtn';
import { addOrder } from '../../../redux/slices/cartSlice';
import { setCartStatus } from '../../../redux/slices/statusSlice';

type ProductFormProps = { product: ContentTypeFull };
export default function ProductForm({ product }: ProductFormProps) {
    const activeSize = useAppSelector(selectActiveSize);
    const amount = useAppSelector(selectAmount);
    const isDisabled = !activeSize;

    const dispatch = useAppDispatch();
    const onClick = (e: React.SyntheticEvent) => {
        if (isDisabled) {
            e.preventDefault();
            return;
        }

        const order: ContentTypeCart = {
            id: product.id,
            title: product.title,
            price: product.price,
            size: activeSize,
            amount,
        };
        dispatch(addOrder(order));
        dispatch(setCartStatus('full'));
    };

    return (
        <>
            <Stack gap={2} className='align-items-center'>
                <Sizes data={product.sizes} activeSize={activeSize} />
                <Amount amount={amount} />
            </Stack>

            <NavLink to='/cart' onClick={onClick}>
                <BigRedBtn disabled={isDisabled}>В корзину</BigRedBtn>
            </NavLink>
        </>
    );
}
