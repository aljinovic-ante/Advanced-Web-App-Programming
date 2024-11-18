import React, { Component } from 'react';
import productData from "../productData";

class Details extends Component {
  render() {
    const { product } = this.props;
    console.log("Selected product:", product);

    const details = productData[product];

    if (!details) {
      return <h2>Product not found</h2>;
    }

    return (
      <div>
        <h2>Details about {product}</h2>
        <p><strong>Description:</strong> {details.description}</p>
        <p><strong>Price:</strong> {details.price}</p>
        <p><strong>Material:</strong> {details.material}</p>
      </div>
    );
  }
}

export default Details;
