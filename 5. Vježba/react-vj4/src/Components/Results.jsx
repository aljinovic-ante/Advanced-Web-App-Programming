import { Link } from "react-router-dom";
export default function Results({products}){
    return <div>
        <h2>Rezultati pretrage:</h2>
        {products.length > 0 ? (<ul>
            {products.map((product,index)=>(
                <li key={index}>
                    {product}
                    <Link to={`/details/${product}`}>
                        <button>Detalji</button>
                    </Link>
                </li>
            ))}
        </ul>
        ):(
            <p>Nema pronađenih proizvoda.</p>
        )}
    </div>
}