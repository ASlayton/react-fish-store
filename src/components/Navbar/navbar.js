import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth';

class Navbar extends React.Component {
  render () {
    const {authed, runAway} = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
    };
    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="">Fish Store</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/Inventory">Inventory</Link>
                    </li>
                    <li>
                      <Link to="/Orders">Orders</Link>
                    </li>
                    <li className="navbar-form">
                      <button
                        onClick={logoutClickEvent}
                        className="btn btn-danger">Logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                )
              }

            </div>
          </div>
        </nav>
      </div>
    );
  };
};
export default Navbar;
