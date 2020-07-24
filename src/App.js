import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import ContactCardsList from './components/ContactCardsList';


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navigation />
                <Switch>
                    <Route path="/todo-list" component={TodoList} />
                    <Route path="/contact-cards-list" component={ContactCardsList} />
                </Switch>
            </div>
        );
    }
}

export default App;
