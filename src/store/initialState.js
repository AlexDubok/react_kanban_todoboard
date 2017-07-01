// State mockup
export default {
    view: {
        dragging   : null, // id
        editingTask: null // object ?
    },
    columns: {
        todo: [
            {
                id         : '',
                name       : '',
                description: '',
                status     : 'todo',
                category   : ''  // one of state.categories
            }
        ],
        doing: [],
        done : []
    },
    categories: [
        {
            name : 'UI/Front-End',
            color: 'tomato'
        },
        {
            name : 'Backend',
            color: 'steelblue'
        }
    ],
    archive: []
};


/*
    Add time logging.
    Filter by time.
*/
