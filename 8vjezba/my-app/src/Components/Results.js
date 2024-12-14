import { Link } from "react-router-dom";

export default function Results({ products }) {
    return (
        <div>
            <h2>Rezultati pretrage:</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name}
                            <Link to={`/details/${product._id}`}>
                                <button>Detalji</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nema pronađenih proizvoda.</p>
            )}
        </div>
    );
}