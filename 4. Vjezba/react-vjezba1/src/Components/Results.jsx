export default function Results({ products }) {
    return (
        <div>
            <h2>Rezultati:</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            ) : (
                <p>Nema pronađenih proizvoda.</p>
            )}
        </div>
    );
}
