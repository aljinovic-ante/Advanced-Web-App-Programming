import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Furniture from "./Components/Furniture";
import Details from "./Components/Details";

const DetailsRoute = () => {
  const { product } = useParams();
  return <Details product={product} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Furniture />} />
        <Route path="/details/:product" element={<DetailsRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
