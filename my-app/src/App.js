
import './App.css';
import React, { Fragment } from 'react';
import Header from './components/layouts/header';
import Side from './components/layouts/sidemenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Expenses from './components/pages/Expenses';
import Wallet from './components/pages/Wallet';
import Dashboard from './components/pages/Dashboard';
import {  BrowserRouter as Router,Route, Switch } from "react-router-dom";

export default function App() {
 
 
  return (
    
<Router>
<Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/expense">
            <Expenses />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
        </Switch>

        </Router>
    
   );
}

// export default App;
