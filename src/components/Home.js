import React, { Component } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data.slice(0, 10)
                })
            });
    }

    render() {
        const { posts } = this.state;
        const postsList = posts.length ? (
            posts.map(post => {
                return <PostItem data={post} key={post.id}/>
            })
        ) :
            ('Loading...');

        return <div className="container">{postsList}</div>
    }
}

export default Home;
