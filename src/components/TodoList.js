import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        console.log('Changed', id);
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            return {
                todos: updatedTodos
            }
        });
    }

    render() {
        const todos = this.state.todos.map(todo => {
           return <TodoItem key={todo.id} data={todo} handleChange={this.handleChange} />
        });

        return (
            <div className="container">
                <h3>My todo's list</h3>
                <ul className="list-group list-group-flush">
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;
