import { useAppSelector } from './reduxHooks';
import { selectOrders } from './slices/cartSlice';

export default function useTotal() {
    const items = useAppSelector(selectOrders).map((item) => ({
        id: item.id,
        price: item.price,
        count: item.amount,
    }));
}
