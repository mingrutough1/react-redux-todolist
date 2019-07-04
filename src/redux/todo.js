

const ADD_TODOLIST = 'ADD_TODOLIST';
const FINISH_TODOLIST = 'FINISH_TODOLIST';
const CHANGE_INPUT = 'CHANGE_INPUT';

const initState = {
    inputText: '',
    todoList: []
}

const todo = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {
                inputText: '',
                todoList: [
                    ...state.todoList,
                    {
                        finished: false,
                        id: +new Date(),
                        text: state.inputText
                    }
                ],
            };
        case FINISH_TODOLIST:
            const list = state.todoList.map(item => {
                if (item.id === action.payload) {
                    item.finished = true;
                }
                return item;
            });
            return {...state,todoList: list}
        case CHANGE_INPUT:
            return {...state, inputText: action.payload}
        default: 
            return state;
    }
}

const add = () => ({type: 'ADD_TODOLIST'});
const finish = (id) => ({type: 'FINISH_TODOLIST', payload: id});
const input = (input) => ({type: 'CHANGE_INPUT', payload: input});
export { add ,finish, input};
export default todo;