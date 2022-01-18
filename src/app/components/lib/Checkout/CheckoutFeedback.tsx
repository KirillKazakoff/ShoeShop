import React from 'react';
import Feedback from 'react-bootstrap/esm/Feedback';
import errorMessages from './errorMsg';

type CheckoutFeedbackProps = { error: string | undefined; name: string };

export default function CheckoutFeedback({ error, name }: CheckoutFeedbackProps) {
    if (!error) return <Feedback type='valid'>Great</Feedback>;

    const errMsg = errorMessages[name][error];

    return <Feedback type='invalid'>{errMsg}</Feedback>;
}
