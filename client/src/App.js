import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import './App.css';

const App = () =>
    <Router>
        <Fragment>
            <Navbar/>
            <Route exact path='/' component={Landing} />
            <section className='container'>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </section>
        </Fragment>
    </Router>
export default App;
