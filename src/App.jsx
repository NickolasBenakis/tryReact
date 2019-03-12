import React from 'react';
import './App.css';
import productsData from './Api/productsData';
import Product from './components/product/product.jsx';



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      count: 0,
      date: setInterval(function(){
        return Date();
      },1)
    }
    // why bind?
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }

  changeStyle() {
    return (this.showStatus === "in") && document.getElementById('status').setAttribute("style", "color: green");
  }

  render() {

    let showStatus = (this.state.isLoggedIn) ? "in" : "out";
    let productsComponent = productsData.map(product => <Product title={product.title} description={product.description} />);
    productsComponent.sort((a) => { return (a.props.description) ? -1 : 0 });

    return (
      <div className="App">
        {this.changeStyle}
        {productsComponent}
        <br />
        <h1 id="status" >You are currently Logged {showStatus}</h1>
        <button className="btn btn-secondary" onClick={this.handleClick}>Press</button>
        <h2>This is my State : {this.state.count}</h2>

        <h2>The time is : {this.state.date}</h2>
      </div>
    );
  }
}

export default App;
