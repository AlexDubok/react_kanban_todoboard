
const defaultState = {
    todo : [],
    doing: [],
    done : []
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, [action.columnName]: [] };
        case 'COLUMN_CHANGE_TASK':
            return {
                ...state,
                [action.columnName]: [
                    ...state[action.columnName],
                    state[action.columnName].filter(task => task.id !== action.taskId),
                    action.updatedTask
                ]
            };
        case 'COLUMN_REMOVE_TASK':
            return {
                ...state,
                [action.columnName]: [
                    ...state[action.columnName],
                    state[action.columnName].filter(task => task.id !== action.taskId)
                ]
            };
        default:
            return state;
    }
}
