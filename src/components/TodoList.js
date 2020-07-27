import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

class TodoList extends Component {
    render() {
        const todos = todosData.map(todo => {
           return <TodoItem key={todo.id} data={todo} />
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
