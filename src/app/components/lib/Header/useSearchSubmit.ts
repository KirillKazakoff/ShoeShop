import { useAppDispatch } from '../../../redux/reduxHooks';
import { setOffset } from '../../../redux/slices/contentSlice';
import { setSearchFilter } from '../../../redux/slices/searchSlice';

export default function useFilter() {
    const dispatch = useAppDispatch();

    const filterItems = () => {
        dispatch(setOffset(0));
        dispatch(setSearchFilter());
    };

    return filterItems;
}
