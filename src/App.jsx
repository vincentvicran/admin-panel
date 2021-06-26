import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './components/userList/UserList';
import User from './components/user/User';

export class App extends Component {
    render() {
        return (
            <Router>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="/user/:id">
                            <User />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
