
const defaultState =    {
    dragging   : null,
    editingTask: null
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'DRAG_TASK':
            return { ...state, dragging: action.id };
        case 'EDIT_TASK':
            return { ...state, editingTask: action.task };
        default:
            return state;
    }
}
