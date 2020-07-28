import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.handleChange(this.props.data.id);
    }

    render() {
        const item = this.props.data;
        const completedStyle = {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        };

        return (
            <li className="list-group-item">
                <input type="checkbox" checked={item.completed} onChange={this.handleChange} />
                <span className="ml-2" style={item.completed ? completedStyle : {}}>{item.text}</span>
            </li>
        );
    }
}

export default TodoItem;
