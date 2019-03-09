import React, { Component } from 'react';

import './App.css';
import productsData from './Api/productsData';
import Product from './components/product/product.jsx';

function App() {

  //const jokesComponent = jokesData.map(joke => <Joke question={joke.question} punchLine={joke.answer} />);
  let productsComponent = productsData.map(product => <Product title={product.title} description={product.description} />);

  productsComponent.sort((a) => { return (a.props.description) ? -1 : 0 });

  return (
    <div className="App">
      {productsComponent}
    </div>
  );
}

export default App;
