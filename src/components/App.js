import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import FabNav from './FabNav/FabNav.js';
import Header from './Header/Header';
import Index from './Index/Index';
import PhotoViewer from './PhotoViewer/PhotoViewer';
import NewUser from './NewUser/NewUser';
import Dashboard from './Dashboard/Dashboard';


const App = (props) => {
  return(
    <BrowserRouter>
        <div className="main-container">
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/photoviewer" exact component={PhotoViewer} />
            <Route path="/user/new" exact component={NewUser} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
        <FabNav />
        </div>
    </BrowserRouter>
  )
}

export default App;
