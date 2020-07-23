import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import ContactCard from './components/ContactCard';


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navigation />
                <Switch>
                    <Route path="/todo-list" component={TodoList} />
                    <Route path="/contact-card" component={ContactCard} />
                </Switch>
            </div>
        );
    }
}

export default App;
