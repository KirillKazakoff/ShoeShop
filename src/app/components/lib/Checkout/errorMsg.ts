type Validation = {
    [key: string]: string | undefined;

    valueMissing: string | undefined;
    patternMismatch?: string | undefined;
};

type ErrorMessages = {
    [key: string]: Validation;
};

const errorMessages: ErrorMessages = {
    phone: {
        valueMissing: 'Введите телефон',
        patternMismatch: 'Вы ввели номер неправильно, введите по шаблону: +79268456734',
    },
    address: {
        valueMissing: 'Введите адрес',
    },
};

export default errorMessages;
