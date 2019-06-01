import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Image,Nav, Navbar, NavItem, FormGroup, FormControl, Button, Container, Row, Thumbnail} from "react-bootstrap";
import Routes from './components/routes/Routes';
//import { connect } from 'react-redux';
import logo from './images/logo.svg';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component{
  render() {
   
    return (
     <Router>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">HTML Refactoring</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/view">View</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      
    </ul>
  </div>
</nav>
     <Routes /> 
     </Router>
    );
  }
}

export default App;
