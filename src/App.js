import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Poll from './components/Home/Poll';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/question/:id" component={Poll} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
