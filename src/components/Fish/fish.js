import React from 'react';
import formatPrice from '../../helpers';
import './Fish.css';

class Fish extends React.Component {
  // You need the fat arrow in this case to have access to this.props
  addClickEvent = () => {
    this.props.addToOrder(this.props.details.id);
  };

  render () {
    const {details} = this.props;
    const image = require(`${details.image}`);
    const isAvailable = details.status === 'available';
    return (
      <li className="Fish">
        <img src={image} alt={details.name} />
        <h3 className="name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={this.addClickEvent}
        >
          {isAvailable ? 'Add to Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
