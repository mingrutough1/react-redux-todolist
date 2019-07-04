import React from 'react';
import { connect } from 'react-redux';
import {add, finish, input} from '../redux/todo';
@connect(
    (state)=>{
        return {
            todoList: state.todo.todoList,
            inputText: state.todo.inputText
        }
    },
    {add, finish, input}
)
class todoList extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.focusInput();
    }
    addNewTodo = () => {
        if (this.props.inputText) {
            this.props.add();
        }
    }
    handleCheckboxChange = (id) => (e) => {
        if (e.target.checked) { // 
            this.props.finish(id);
        }
    }
    handleInputChange = (e) => {
        this.props.input(e.target.value);
    }
    focusInput = () => {
        this.inputRef.current.focus();
    }
    render() {
        const newTodoList = this.props.todoList.filter(item => !item.finished);
        const finishTodoList = this.props.todoList.filter(item => item.finished);
        const input = this.props.inputText;
        return (
            <div>
                <div>
                    <input  
                        value={input}
                        onChange={this.handleInputChange}
                        ref={this.inputRef} 
                        type="text" 
                        className="app-input" 
                        placeholder="what to do"/>
                    <button onClick={this.addNewTodo}>新建</button>
                </div>
                <ol>
                    {
                        newTodoList.map((todo, index) => (
                            <li key={todo.id}>
                                <span>{todo.text}</span>
                                <input type="checkbox" onChange={this.handleCheckboxChange(todo.id)}/>
                            </li>
                        ))
                    }
                </ol>
                <ol className="finished-list">
                    {
                        finishTodoList.map((todo, index) => (
                            <li key={index}>
                                <span>{todo.text}</span>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}

export default todoList;