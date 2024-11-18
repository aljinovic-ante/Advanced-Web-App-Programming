import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Results({ products }) {
  const navigate = useNavigate();

  const handleDetailsClick = (product) => {
    console.log("product 1: ", product)
    navigate(`/details/${product}`);
  };

  return (
    <div>
      <h2>Rezultati:</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product}
                <>   </><button onClick={() => handleDetailsClick(product)}>Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nema pronađenih proizvoda.</p>
      )}
    </div>
  );
}
