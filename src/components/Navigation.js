import React, {Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: ''
        }
    }
    
    componentDidMount() {
        this.setState({
            location: window.location.href
        })
    }

    render() {
        console.log('nav ', this.props);
        console.log('logged in: ', this.props.auth.status);
        const authBlock = this.props.auth.status 
        ? (<div><NavLink to="/logout" className="btn btn-outline-primary my-2 my-sm-0">Logout</NavLink></div>) 
        : (<div><NavLink to={{pathname: '/login', state: {from: this.state.location }}} className="btn btn-outline-primary my-2 my-sm-0">Login</NavLink>
        <NavLink to="/signup" className="btn btn-outline-secondary my-2 my-sm-0" style={{marginLeft: "20px"}}>Sign Up</NavLink></div>);
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className="navbar-brand">Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">&nbsp;</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/todo-list" className="nav-link">Todos List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/travel-form" className="nav-link">Travel Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact-cards-list" className="nav-link">Contacts</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {authBlock}
                    </form>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.authReducer.auth
    }
};

export default connect(mapStateToProps)(Navigation);
