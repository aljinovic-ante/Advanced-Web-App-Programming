import './App.css';
import Furniture from './Components/Furniture';
import Details from './Components/Details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./Components/CartProvider";
import { CartItems } from './Components/CartProvider';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Furniture />} />
            <Route path="/details/:product" element={<Details />} />
            <Route path="/kosarica" element={<CartItems />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
