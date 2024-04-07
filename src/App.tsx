import React from 'react';
import classes from './App.module.scss';
import Router from './components/Router';
import Navigation from './components/navigation/Navigation';

function App() {
  
  return (
    <div className={classes.App}>
      <header>
        <Navigation/>
      </header>
      <Router/>
    </div>
  );
}

export default App;
