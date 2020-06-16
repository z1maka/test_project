import { types } from './types';

const initialState = {};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TYPES: {
            return state;
        }
        default:
            return state;
    }
};
