import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import ContactCardsList from './components/ContactCardsList';
import TravelForm from './components/TravelForm';
import Post from './components/Post';
import Login from './components/Login';
import HomeState from './components/HomeState';
import PostState from './components/PostState';
import Logout from './components/Logout';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navigation />
                <Switch>
                    <Route path="/" exact component={HomeState} />
                    <Route path="/todo-list" component={TodoList} />
                    <Route path="/travel-form" component={TravelForm} />
                    <Route path="/contact-cards-list" component={ContactCardsList} />
                    <Route path="/post/:id" component={PostState} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                </Switch>
            </div>
        );
    }
}

export default App;
