import { useState,useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import Results from "./Results";

const furnitureData = {
  "kauc": {
      "podvrste": [
          { "type": "na_razvlačenje", "products": ["Moderni krevet na razvlačenje", "Pretvorivi kauč", "Sofa na razvlačenje sa storage-om", "Sofa krevet sa naslonima", "Kauč za spavanje s memorijskom pjenom"] },
          { "type": "kožni", "products": ["Kožna kutna garnitura", "Talijanski kožni naslonjač", "Kožna sofa s funkcijom", "Kožna l-sjedalica", "Kožni modularni kauč"] },
          { "type": "kutni", "products": ["Kutna garnitura", "Kompaktni kutni kauč", "Kutna garnitura s funkcijom spavanja", "Kutna sofa s modernim dizajnom", "Ugaoni kauč sa širokim naslonima"] }
      ]
  },
  "stol": {
      "podvrste": [
          { "type": "drveni", "products": ["Hrastov blagovaonski stol", "Rustikalni drveni stol", "Drveni stolić za kavu", "Suvremeni drveni radni stol", "Masivni drveni blagovaonski stol"] },
          { "type": "stakleni", "products": ["Stakleni stolić za kavu", "Moderni stakleni blagovaonski stol", "Stakleni radni stol s metalnim okvirom", "Stakleni stolić sa drvenim osnovama", "Luksuzni stakleni stol"] },
          { "type": "skandinavski", "products": ["Skandinavski radni stol", "Minimalistički nordijski stol", "Skandinavski blagovaonski stol", "Nordijski stolić za kavu", "Skandinavski elegantni stolić"] }
      ]
  },
  "stolica": {
      "podvrste": [
          { "type": "s_jastukom", "products": ["Blagovaonska stolica s jastukom", "Baršunasta stolica", "Stolica s luksuznim jastukom", "Komforna stolica za blagovaonu", "Stolica s debelim naslonom"] },
          { "type": "bar", "products": ["Drveni barski stolac", "Metalni barski stolac", "Bar stolac s naslonom", "Modularni barski stolac", "Visoki barski stolac od drva"] },
          { "type": "uredska_ergonomska", "products": ["Ergonomska uredska stolica", "Uredska stolica s mrežastim naslonom", "Moderna ergonomska uredska stolica", "Uredska stolica sa postavkom za masažu", "Ergonomska stolica sa podesivim naslonom"] }
      ]
  },
  "ormar": {
      "podvrste": [
          { "type": "ugradbeni", "products": ["Ugradbeni ormar", "Ormarić s kliznim vratima", "Ugradbeni ormar s ogledalom", "Modularni ugradbeni ormar", "Veliki ugradbeni ormar sa ladicama"] },
          { "type": "masivni_drvo", "products": ["Masivni drveni ormar", "Klasični drveni ormar", "Rustikalni drveni ormar", "Drveni ormar s policama", "Suvremeni drveni ormar"] },
          { "type": "s_ogledalom", "products": ["Ormarić s ogledalom na vratima", "Ormarić s cijelom dužinom ogledala", "Ormar s zrcalom", "Ormar sa skrivenim ogledalom", "Ormarić s ogledalom i modernim dizajnom"] }
      ]
  },
  "krevet": {
      "podvrste": [
          { "type": "bračni_s_ladicama", "products": ["Okvir kreveta s ladicama", "Platforma krevet s ladicama", "Bračni krevet s prostorom za pohranu", "Krevet s velikim ladicama ispod", "Krevet s ladicama za duže zimske stvari"] },
          { "type": "kovano_željezo", "products": ["Krevet od kovanog željeza", "Antikni okvir kreveta od željeza", "Romantični krevet od kovanog željeza", "Krevet sa starinskim željezom", "Luksuzni krevet s kovanom željeznom osnovom"] },
          { "type": "na_kat", "products": [] }
      ]
  }
};

export default function Furniture(){
    const [allFurniture,setAllFurniture]=useState([]);
    const [furniture,setFurniture]=useState("");
    const [types,setTypes]=useState([]);
    const [type,setType]=useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    async function getFurnitureTypes() {
        const furniture = await fetch("http://demo9984311.mockable.io/namjestaj");
        const json = await furniture.json();
        console.log(json);

        return json;
    }

    function getTypesByFurniture(furniture) {
      console.log("getTypesByFurniture: ", furniture);
      if (furnitureData[furniture]) {
          console.log("if uvjet", furnitureData[furniture]);
          setTypes(furnitureData[furniture].podvrste.map((podvrsta) => podvrsta.type));
      } else {
          setTypes([]);
      }
    }

    
    function filterProducts() {
      if (furniture && type) {
          const filtered = [];
          if (furniture && type && furnitureData[furniture]) {
            const podvrsta = furnitureData[furniture].podvrste.find(p => p.type === type);
            if (podvrsta) {
              filtered.push(...podvrsta.products);
            }
          }
          setFilteredResults(filtered);
      } else {
          setFilteredResults([]);
      }
    }  

    useEffect(()=>{
        getFurnitureTypes().then((data)=>{setAllFurniture(data.vrsteNamjestaja)});
    },[])

    useEffect(() => {
        setType("");
        getTypesByFurniture(furniture);
    }, [furniture]);

    useEffect(() => {
      filterProducts();
    }, [furniture, type]);

    return <div>
        {/* <DropdownMenu options={allFurniture} value={furniture} onChange={setFurniture}/> 
        {furniture && <h1>{furniture}</h1>}
        {types.length>0 && <DropdownMenu options={types} value={type} onChange={setType}/>}
        {type!="" && <h1>Izabrali ste {furniture}: {type}</h1>} */}

        <h1>Filter Products</h1>
        <form>
            <DropdownMenu options={allFurniture} value={furniture} onChange={setFurniture} />

            {furniture && (
                <DropdownMenu options={types} value={type} onChange={setType} />
            )}
        </form>

        {filteredResults.length > 0 && <Results products={filteredResults} />}
        {filteredResults.length === 0 && furniture && type && (
            <p>Nema pronadednog namjestaja</p>
        )}
    </div>
}