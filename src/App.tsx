import React from 'react';
import classes from './App.module.scss';
import Router from './components/Router';
import Navigation from './components/navigation/Navigation';

function App() {
  
  return (
    <div className={classes.App}>
      <header>
        <h1 className={classes.visually_hidden}>Заголовок главной страницы</h1>
        <Navigation/>
      </header>
      <Router/>
    </div>
  );
}

export default App;
