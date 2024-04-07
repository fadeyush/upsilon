import React from 'react';
import classes from './App.module.scss';
import Router from './components/Router';

function App() {
  
  return (
    <div className={classes.App}>
      <header></header>
      <Router/>
    </div>
  );
}

export default App;
