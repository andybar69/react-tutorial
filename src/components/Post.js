import React, { Component } from 'react';
import axios from "axios";

class Post extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({
                    post: response.data
                })
            });
    }

    render() {
        const post = this.state.post !== null
            ? (<div>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.body}</p>
            </div>)
            : (<div className="">Loading post...</div>);

        return <div className="container">{post}</div>
    }
}

export default Post;
