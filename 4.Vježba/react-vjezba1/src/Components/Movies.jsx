import { useState,useEffect } from "react";

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
        {/* <h1>{allFurniture}</h1> */}
        {/* <h1>{
        allFurniture.map((item, index)=>(<h1 key={index}>{item}</h1>))
        }</h1> */}
        <select value={furniture} onChange={(e)=>{console.log("odabir namjestaja", e.target.value);setFurniture(e.target.value)}}>
            {allFurniture.map((item, index)=>(<option value={item} key={index}>{item}</option>))}
        </select>
        {/* <button
        onClick={(e) => {
          e.preventDefault();
          getTypesByFurniture(furniture);
        }}
        >Submit</button> */}
        {furniture && <h1>{furniture}</h1>}
        {types.length>0 && 
        <select value={type} onChange={(e)=>(setType(e.target.value))}>
            {
            types.map((item,index)=>(<option value={item} key={index}>{item}</option>))
            }
        </select>}
        {type!="" && <h1>Izabrali ste {furniture}: {type}</h1>}
    </div>
}