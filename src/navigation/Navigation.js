import React from 'react'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import LoginRegister from '../loginRegister/LoginRegister';
import User from '../user/User';
import './Navigation.css';

const Home = () => (
  <div>
    <h2>Welcome to Weather App</h2>
  </div>
);
const Navigation = () => (
  <Router>
      <div className="Wrapper">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/loginregister">Login Register</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/loginregister" component={LoginRegister} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </Router>
);

export default Navigation;
