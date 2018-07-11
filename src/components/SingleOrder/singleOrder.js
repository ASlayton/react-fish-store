import React from 'react';
import orderRequest from '../../firebaseRequests/orders';
import './SingleOrder.css';

class SingleOrder extends React.Component {

  deleteOrderClick = () => {
    const firebaseId = this.props.match.params.id;
    // console.error('id', firebaseId);
    orderRequest
      .deleteRequest(firebaseId)
      .then (() => {
        this.props.history.push('/orders');
      })
      .catch((error) => {
        console.error('ERROR IN DELETE',error);
      });
  };
  render () {
    return (
      <div className="SingleOrder">
        <h1>SingleOrder</h1>
        <button className="btn btn-danger" onClick={this.deleteOrderClick}>Delete Order</button>
      </div>
    );
  }
}

export default SingleOrder;
