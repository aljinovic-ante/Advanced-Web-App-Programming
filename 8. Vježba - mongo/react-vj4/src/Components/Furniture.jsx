import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import Results from "./Results";

export default function Furniture() {
  const [allFurniture, setAllFurniture] = useState([]);
  const [furniture, setFurniture] = useState("");
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => { //za vrste namejstaja
    fetch("http://localhost:5000/api/namjestaj")
      .then((res) => res.json())
      .then((data) => setAllFurniture(data.vrsteNamjestaja))
      .catch((error) => console.error("Error fetching furniture types:", error));
  }, []);

  useEffect(() => { //za podvrste
    if (furniture) {
      fetch(`http://localhost:5000/api/namjestaj/${furniture}`)
        .then((res) => res.json())
        .then((data) => {
          setTypes(data.podvrste.map((podvrsta) => podvrsta.type));
          setType("");
        })
        .catch((error) => console.error("Error fetching types:", error));
    } else {
      setTypes([]);
    }
  }, [furniture]);

  useEffect(() => { //filtriraj nakon sta izabere namjestaj i tip
    if (furniture && type) {
      fetch(`http://localhost:5000/api/namjestaj/${furniture}`)
        .then((res) => res.json())
        .then((data) => {
          const podvrsta = data.podvrste.find((p) => p.type === type);
          setFilteredResults(podvrsta ? podvrsta.products : []);
        })
        .catch((error) => console.error("Error filtering products:", error));
    } else {
      setFilteredResults([]);
    }
  }, [furniture, type]);

  return (
    <div>
      <h1>Filter products</h1>
      <form>
        <DropdownMenu options={allFurniture} value={furniture} onChange={setFurniture} />
        {furniture && <DropdownMenu options={types} value={type} onChange={setType} />}
      </form>
      {filteredResults.length > 0 && <Results products={filteredResults} />}
      {filteredResults.length === 0 && furniture && type && <p>Nema pronađenog namještaja</p>}
    </div>
  );
}