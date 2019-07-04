

const ADD_TODOLIST = 'ADD_TODOLIST';
const FINISH_TODOLIST = 'FINISH_TODOLIST';
const CHANGE_INPUT = 'CHANGE_INPUT';

const initState = {
    input: '',
    todoList: []
}

const todo = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            const todoList = state.todoList;
            todoList.push({
                finished: false,
                id: +new Date(),
                text: action.payload
            });
            return {
                input: '',
                todoList,
            };
        case FINISH_TODOLIST:
            const list = state.todoList;
            list.forEach(item => {
                if (item.id === action.payload) {
                    item.finished = true;
                }
            });
            return {...state,todoList: list}
        case CHANGE_INPUT:
            return {...state, input: action.payload}
        default: 
            return state;
    }
}

export default todo;