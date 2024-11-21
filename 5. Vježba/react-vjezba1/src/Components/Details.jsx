import React, { Component } from 'react';
import productData from "../productData";

class Details extends Component {
  render() {
    const { product } = this.props;

    const details = productData[product];

    if (!details) {
      return <h2>Nema tog produkta</h2>;
    }

    return (
      <div>
        <h2>Detalji o {product}</h2>
        <p><strong>Opis:</strong> {details.description}</p>
        <p><strong>Cijena:</strong> {details.price}</p>
        <p><strong>Materijal:</strong> {details.material}</p>
      </div>
    );
  }
}

export default Details;
