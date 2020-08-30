import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { logoutUser } from '../actions/authAction';
import { connect } from "react-redux";

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.logout();
        this.props.history.goBack();
    }
    
    render() {
        return null;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { 
            dispatch(logoutUser())
        }
    }
};

export default connect(null, mapDispatchToProps)(Logout);
