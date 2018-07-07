import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
// import Fish from '../components/Fish/fish';
import Home from '../components/Home/home';
import Inventory from '../components/Inventory/inventory';
import Login from '../components/Login/login';
import Navbar from '../components/Navbar/navbar';
// import New from '../components/New/new';
// import Order from '../components/Order/order';
// import OrderSpa from '../components/OrderSpa/orderSpa';
import Register from '../components/Register/register';
// import SingleOrder from '../components/SingleOrder/singleOrder';
import fbConnection from '../firebaseRequests/connection';

fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/orders', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state={
    authed: false,
  }
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
                  <PrivateRoute path="/inventory" authed={this.state.authed} component={Inventory} />
                  <PublicRoute path="/register" authed={this.state.authed} component={Register} />
                  <PublicRoute path="/login" authed={this.state.authed} component={Login} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
        {/* <Fish />
        <New />
        <Order />
        <OrderSpa />
        <SingleOrder /> */}
      </div>
    );
  }
}

export default App;
