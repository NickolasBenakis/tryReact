import React from 'react';
import './App.css';
import productsData from './Api/productsData';
import Product from './components/product/product.jsx';



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    
    let showStatus = (this.state.isLoggedIn) ? "in" : "out";
    let productsComponent = productsData.map(product => <Product title={product.title} description={product.description} />);
    productsComponent.sort((a) => { return (a.props.description) ? -1 : 0 });

    return (
      <div className="App">
        {productsComponent}
        <br />
        <h1>You are currently Logged {showStatus}</h1>
      </div>
    );
  }
}

export default App;
