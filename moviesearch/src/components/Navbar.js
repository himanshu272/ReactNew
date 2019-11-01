import React from "react";
import Search from "./Search";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">MovieSearch</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link"><Link to="/">Home</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><Link to="/search">Search</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/about">About</Link></a>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/search"><Search/></Route>
        <Route path="/about"><About/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
