import React, { useEffect } from 'react';
import classes from './App.module.scss';
import ProductList from './components/productList/ProductList';


function App() {
  
  return (
    <div className={classes.App}>
      <header>
        
      </header>
      <main>
        <ProductList/>
      </main>
    </div>
  );
}

export default App;
