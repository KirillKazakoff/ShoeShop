/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import {
    border,
    compose,
    layout,
    position,
    typography,
    space,
    color,
    flexbox,
    alignSelf,
    background,
    system,
} from 'styled-system';

const config = {
    color: {
        property: 'color',
        scale: 'colors',
    },
};

const pointer = system({
    pointer: true,
});
// config.blm = config.color;

export const boxCompose = () =>
    compose(
        border,
        space,
        layout,
        typography,
        color,
        position,
        alignSelf,
        pointer,
        background
    );

export const flexCompose = () => {
    return compose(border, space, layout, typography, color, position, flexbox);
};

export const textCompose = () => compose(space, typography, color);

export const imageCompose = () => compose(space, layout, position, background);
