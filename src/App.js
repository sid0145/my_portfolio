import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/index';
import Resume from './components/resume';
import Projects from './components/projects';
import Contacts from './components/contact';


function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contacts" component={Contacts} />
    </>
   
  );
}

export default App;
