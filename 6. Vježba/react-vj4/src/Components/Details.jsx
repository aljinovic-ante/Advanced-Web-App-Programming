import { Component } from "react";
import productData from "../productData";
import { useParams } from "react-router-dom";
import { CartContext } from "./Cart";

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
            productDetails:null
        };
    }

    componentDidMount(){
        const {product}=this.props.params;
        const productDetails=productData[product];
        this.setState({productDetails});
    }

    handleAddToCart=()=>{
        const {productDetails}=this.state;
        if(productDetails){
            this.context.addToCart({
                name: this.props.params.product,
                ...productDetails
            });
        }
    }

    render(){
        const {productDetails}=this.state;
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
            </div>
        )
    }

}

export default withRouter(Details); //1