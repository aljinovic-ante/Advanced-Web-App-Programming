import './App.css';
import Furniture from './Components/Furniture';
import Details from './Components/Details';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import CartProvider from "./Components/Cart"

function App() {
  return (
    // <div className="App">
    //   <Furniture />
    // </div>
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Furniture />}></Route>
            <Route path="/details/:product" element={<Details />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
