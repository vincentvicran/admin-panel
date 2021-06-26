import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
export class App extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Home />
                </div>
            </div>
        );
    }
}

export default App;
