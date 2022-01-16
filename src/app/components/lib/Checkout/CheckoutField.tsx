import React from 'react';
import { FormControlProps, FormControl } from 'react-bootstrap';
import { InputState } from '../../../redux/slices/checkoutSlice';
import validate from './validate';

type FullProps = FormControlProps & {
    inputState: InputState;
    name: string;
    pattern?: string;
    required?: boolean;
};
type CheckoutFieldProps = Omit<FullProps, 'isValid' | 'isInvalid' | 'value'>;

export default function CheckoutField(props: CheckoutFieldProps) {
    const {
        inputState, placeholder, name, onChange, onBlur, pattern, required,
    } = props;
    const [isValid, isInvalid] = validate(inputState);

    return (
        <FormControl
            placeholder={placeholder}
            name={name}
            value={inputState.value}
            onChange={onChange}
            onBlur={onBlur}
            isValid={isValid}
            isInvalid={isInvalid}
            pattern={pattern}
            required={required}
        />
    );
}
