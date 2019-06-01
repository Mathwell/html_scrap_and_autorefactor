import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import View from "./View";


export default () =>
  <Switch>    
    <React.Fragment>         
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/view" component={View}/>
    </React.Fragment>
  </Switch>;