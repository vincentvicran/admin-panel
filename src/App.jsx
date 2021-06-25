import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';

export class App extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <div className="others">Other Pages</div>
                </div>
            </div>
        );
    }
}

export default App;
