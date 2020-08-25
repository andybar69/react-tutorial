import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePost } from '../actions/postAction';


class PostState extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    };

    render() {
        const post = this.props.post
            ? (<div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={this.handleClick}>Delete</button>
                </div>
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
};

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostState);
