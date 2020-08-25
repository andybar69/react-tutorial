import React, { Component } from 'react';
import { connect } from "react-redux";
import users from '../data/userData';
import { loginUser } from '../actions/authAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        let user = users.filter(user => {
            return user.login === this.state.login && user.password === this.state.password
        });
        console.log(user);
        if (user.length > 0) {
            this.props.authUser(user[0].firstName, user[0].lastName, true);
        }
    };

    render() {
        return <div>
            <p className="text-center">Login form</p>
                <div className="container-fluid h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <form action="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control form-control-lg"
                                           placeholder="Login"
                                           name="login"
                                           onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className="form-control form-control-lg"
                                           placeholder="Password"
                                           name="password"
                                           onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info btn-lg btn-block">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authUser: (firstName, lastName, status) => { dispatch(loginUser(firstName, lastName, status))}
    }
};

export default connect(null, mapDispatchToProps)(Login);
