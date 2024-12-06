import logo from './logo.svg';
import './App.css';
import Furniture from './Components/Furniture';
import Details from './Components/Details';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Furniture />
    // </div>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Furniture />}></Route>
          <Route path="/details/:product" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
