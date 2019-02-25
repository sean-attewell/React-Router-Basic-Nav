import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

import { Route } from 'react-router-dom';



const App = () => (
  <div>
    <Navigation />
    {/* This is where we're going to declare and specify our router. */}
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
);

export default App;
