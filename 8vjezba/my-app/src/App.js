import "./App.css";
import Furniture from "./Components/Furniture.js";
import Details from "./Components/Details.js";
import CartProvider from "./Components/CartProvider.js";
import CartItems from "./Components/CartItems.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Furniture />} />
            <Route path="/details/:product" element={<Details />} />
            <Route path="/kosarica" element={<CartItems />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;