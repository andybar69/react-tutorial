import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let url = '/post/' + this.props.data.id;
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.data.title}</h5>
                <p className="card-text">{this.props.data.body}</p>
                <NavLink to={url} className="card-link">Read</NavLink>
            </div>
        </div>
    }
}

export default PostItem;
