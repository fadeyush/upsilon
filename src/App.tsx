import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchProducts } from './store/action-creator.ts/fetchProducts';

function App() {
  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducer);

  useEffect(()=> {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      {/* {isLoading && <h1>Загрузка...</h1>} */}
      {/* {error && <h1>{error}</h1>} */}
      {/* {products.map(product=> */}
        {/* <div>{product.id} <img src={product.image} alt="" /> {product.title} {product.price}</div>)} */}
    </div>
  );
}

export default App;
