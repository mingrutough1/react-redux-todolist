import React from 'react';
import { connect } from 'react-redux';

@connect
class todoList extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.focusInput();
    }
    addNewTodo = () => {
    }
    handleCheckboxChange = (id) => (e) => {
        if (e.target.checked) { // 
        }
    }
    handleInputChange = (e) => {
    }
    focusInput = () => {
        this.inputRef.current.focus();
    }
    render() {
        const newTodoList = this.state.todoList.filter(item => !item.finished);
        const finishTodoList = this.state.todoList.filter(item => item.finished);
        return (
            <div>
                <div>
                    <input  
                        value={this.state.input}
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