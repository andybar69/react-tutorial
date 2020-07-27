import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.data.completed
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.checked);
        this.setState({checked: event.target.checked});
    }

    render() {
        const item = this.props.data;
        return (
            <li className="list-group-item">
                <input type="checkbox" checked={this.state.completed} onChange={this.handleChange}/>
                <span className="ml-2">{item.text}</span>
            </li>
        );
    }
}

export default TodoItem;
