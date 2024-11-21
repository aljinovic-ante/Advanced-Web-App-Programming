import { useState,useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

const furnitureData = {
    "kauc": {
      "podvrste": [
        "na_razvlacenje",
        "kozni",
        "kutni"
      ]
    },
    "stol": {
      "podvrste": [
        "drveni",
        "stakleni",
        "skandinavski"
      ]
    },
    "stolica": {
      "podvrste": [
        "s_jastukom",
        "bar",
        "uredska_ergonomska"
      ]
    },
    "ormar": {
      "podvrste": [
        "ugradbeni",
        "masivni_drvo",
        "s_ogledalom"
      ]
    },
    "krevet": {
      "podvrste": [
        "bracni_s_ladicama",
        "kovani_zeljezo",
        "na_kat"
      ]
    }
};

export default function Movies(){
    const [allFurniture,setAllFurniture]=useState([]);
    const [furniture,setFurniture]=useState("");
    const [types,setTypes]=useState([]);
    const [type,setType]=useState("");

    async function getFurnitureTypes() {
        const furniture = await fetch("http://demo9984311.mockable.io/namjestaj");
        const json = await furniture.json();
        console.log(json);

        return json;
    }

    function getTypesByFurniture(furniture){
        console.log("getTypesByFurniture: ",furniture);
        if(furnitureData[furniture]){
            console.log("if uvjet", furnitureData[furniture]);
            setTypes(furnitureData[furniture].podvrste)
        }else{
            setTypes([])
        }
    }
   
    useEffect(()=>{
        getFurnitureTypes().then((data)=>{setAllFurniture(data.vrsteNamjestaja)});
    },[])

    useEffect(() => {
        setType("");
        getTypesByFurniture(furniture);
    }, [furniture]);


    return <div>
        <DropdownMenu options={allFurniture} value={furniture} onChange={setFurniture} /> 
        {furniture && <h1>{furniture}</h1>}
        {types.length>0 &&
        <DropdownMenu options={types} value={type} onChange={setType}/> 
        }
        {type!="" && <h1>Izabrali ste {furniture}: {type}</h1>}
    </div>
}