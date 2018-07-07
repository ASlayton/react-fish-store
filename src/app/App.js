import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
// import Fish from '../components/Fish/fish';
import Home from '../components/Home/home';
// import Inventory from '../components/Inventory/inventory';
// import Login from '../components/Login/login';
import Navbar from '../components/Navbar/navbar';
// import New from '../components/New/new';
// import Order from '../components/Order/order';
// import OrderSpa from '../components/OrderSpa/orderSpa';
// import Register from '../components/Register/register';
// import SingleOrder from '../components/SingleOrder/singleOrder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
        {/* <Fish /> */}
        {/* <Inventory />
        <Login />
        <New />
        <Order />
        <OrderSpa />
        <Register />
        <SingleOrder /> */}
      </div>
    );
  }
}

export default App;
