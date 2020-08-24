import React, { Component } from 'react';
import PostItem from './PostItem';
import { connect } from "react-redux";

class HomeState extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postsList = posts.length ? (
                posts.map(post => {
                    return <PostItem data={post} key={post.id}/>
                })
            ) :
            ('Loading...');

        return <div className="container">{postsList}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(HomeState);
