import { Component } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";
import Modal from "./Modal";

function withRouter(Component) {
    return function WrappedComponent(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
}

class Details extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {
            productDetails: null,
            showModal: false,
            modalMessage: ``,
        };
    }

    async componentDidMount() {
        const { product } = this.props.params;

        try {
            const response = await fetch(`http://localhost:5000/api/products/${product}`);
            if (!response.ok) {
                throw new Error("Failed to fetch product details");
            }
            const productDetails = await response.json();
            this.setState({ productDetails });
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    handleAddToCart = () => {
        const { productDetails } = this.state;
        if (productDetails) {
            this.context.addToCart({
                name: productDetails.name,
                ...productDetails,
            });
            console.log("PRODUCT ADDED TO CART:", productDetails.name);

            this.setState({
                showModal: true,
                modalMessage: `Proizvod ${productDetails.name} je dodan u košaricu!`,
            });
        }
    };

    handleCloseModal = () => {
        console.log("CLOSE MODAL");
        this.setState({
            showModal: false,
        });
    };

    render() {
        const { productDetails, showModal, modalMessage } = this.state;
        if (!productDetails) {
            return <p>Nema podataka o proizvodu</p>;
        }

        return (
            <div>
                <h2>Detalji o {productDetails.name}</h2>
                <p><strong>Opis:</strong> {productDetails.description}</p>
                <p><strong>Cijena:</strong> {productDetails.price}</p>
                <p><strong>Materijal:</strong> {productDetails.material}</p>
                <button onClick={this.handleAddToCart}>Dodaj u košaricu</button>

                {showModal && (
                    <Modal message={modalMessage} onClose={this.handleCloseModal} />
                )}
            </div>
        );
    }
}

export default withRouter(Details);