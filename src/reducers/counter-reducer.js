import { CHANGE_VALUE } from '../actions/counter';

const defaultState =    {
    counter: 0
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            return { ...state, counter: state.counter + action.value };
        default:
            return state;
    }
}
