import { Component } from "react";
import productData from "../productData";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";
import Modal from "./Modal";

function withRouter(Component) { //2  --> saljem Details kao component
    return function WrappedComponent(props) {
      const params = useParams();
      return <Component {...props} params={params} />; //params je naziv namjestaja, props je ovde prazan ali mu se moze pristupit
    };
}

class Details extends Component{

    static contextType=CartContext;

    constructor(props){
        super(props);
        this.state={
            productDetails:null,
            showModal:false,
            modalMessage:``,
        };
    }

    componentDidMount(){
        const {product}=this.props.params;
        const productDetails=productData[product];
        this.setState({productDetails});
    };

    handleAddToCart=()=>{
        const {productDetails}=this.state;
        if(productDetails){
            this.context.addToCart({
                name: this.props.params.product,
                ...productDetails
            });
            console.log("PROZIVOD U KOSARICU: ",this.props.params.product)
            this.setState({
                showModal:true,
                modalMessage:`Proizvod ${this.props.params.product} je dodan u košaricu!`
            });
        }
    };

    handleCloseModal=()=>{
        console.log("CLOSE MODAL")
        this.setState({
            showModal:false
        })
    };

    render(){
        const {productDetails,showModal,modalMessage}=this.state;
        if(!productDetails){
            return <p>Nema podataka o proizvodu</p>
        }

        return(
            <div>
                <h2>Detalji o {this.props.params.product}</h2>
                <p><strong>Opis:</strong> {productDetails.description}</p>
                <p><strong>Cijena:</strong> {productDetails.price}</p>
                <p><strong>Materijal:</strong> {productDetails.material}</p>
                <button onClick={this.handleAddToCart}>Dodaj u košaricu</button>

                {showModal && (
                    <Modal message={modalMessage} onClose={this.handleCloseModal} />
                )}
            </div>
        )
    }

}

export default withRouter(Details); //1