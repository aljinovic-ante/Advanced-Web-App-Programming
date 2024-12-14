import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import Results from "./Results";

export default function Furniture() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`http://localhost:5000/api/categories/${selectedCategory}/subcategories`)
        .then((res) => res.json())
        .then((data) => setSubcategories(data))
        .catch((error) => console.error("Error fetching subcategories:", error));
    } else {
      setSubcategories([]);
    }
    setSelectedSubcategory("");
    setFilteredResults([]);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedSubcategory) {
      fetch(`http://localhost:5000/api/subcategories/${selectedSubcategory}/products`)
        .then((res) => res.json())
        .then((data) => setFilteredResults(data))
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setFilteredResults([]);
    }
  }, [selectedSubcategory]);

  return (
    <div>
      <h1>Filter Products</h1>
      <form>
        <DropdownMenu
          options={categories.map((category) => ({
            value: category._id,
            label: category.name,
          }))}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        {selectedCategory && (
          <DropdownMenu
            options={subcategories.map((subcategory) => ({
              value: subcategory._id,
              label: subcategory.name,
            }))}
            value={selectedSubcategory}
            onChange={setSelectedSubcategory}
          />
        )}
      </form>
      {filteredResults.length > 0 && <Results products={filteredResults} />}
      {filteredResults.length === 0 && selectedCategory && selectedSubcategory && (
        <p>No furniture found</p>
      )}
    </div>
  );
}