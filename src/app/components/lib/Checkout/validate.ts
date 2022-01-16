/* eslint-disable object-curly-newline */
import { InputState } from '../../../redux/slices/checkoutSlice';

export default function validate(inputState: InputState) {
    const { wasFocused } = inputState;

    const isValid = !wasFocused ? undefined : inputState.isValid;
    const isInvalid = isValid === undefined ? undefined : !isValid;

    return [isValid, isInvalid];
}
