import React, { Component } from 'react';
import { connect } from "react-redux";

class PostState extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const post = this.props.post
            ? (<div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>)
            : (<div className="">Loading post...</div>);

        return <div className="container">{post}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        post: state.posts.find((post) => {
            return post.id == id
        })
    }
}

export default connect(mapStateToProps)(PostState);
