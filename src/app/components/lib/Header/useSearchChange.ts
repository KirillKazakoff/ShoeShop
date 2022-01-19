import { useAppDispatch } from '../../../redux/reduxHooks';
import { setSearchInput } from '../../../redux/slices/searchSlice';
import { OnChangeField } from '../Checkout/useChange';

export default function useSearchChange() {
    const dispatch = useAppDispatch();

    const onChange: OnChangeField = (e) => {
        dispatch(setSearchInput(e.currentTarget.value));
    };

    return onChange;
}
