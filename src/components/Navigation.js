import React, {Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
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
                        <NavLink to="/login" className="btn btn-outline-primary my-2 my-sm-0">Login</NavLink>
                        <NavLink to="/signup" className="btn btn-outline-secondary my-2 my-sm-0" style={{marginLeft: "20px"}}>Sign Up</NavLink>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navigation;
