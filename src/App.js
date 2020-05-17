import React, { useState } from "react";
import logo from './images/beelogo.jpg';
import './css/App.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

export default function App() {
 
  return (
    <div className="app">
      <header>
        <div className="title">
          <h2>Pet Paddock</h2>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking">Book</Link>
        </nav>
      </header>
        <div className="main">
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
        </div>
      <footer>
        <div className="webmaster">
          
        </div>
        <div className="madeby">
        <a href="http://beedev-itservices.com" target="_blank"><img src={logo} alt="logo" /></a>
        <h4>Created by BeeDev IT Services &copy; 2020 </h4>
        </div>
      </footer>
    </div>
  );
}