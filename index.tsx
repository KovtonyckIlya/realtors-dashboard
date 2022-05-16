import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/animate.min.css';
import './assets/css/light-bootstrap-dashboard.css';
import "./assets/scss/light-bootstrap-dashboard-react.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
