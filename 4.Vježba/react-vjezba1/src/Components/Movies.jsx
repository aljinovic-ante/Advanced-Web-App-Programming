import { useState,useEffect } from "react";

export default function Movies(){
    const [allFurniture,setAllFurniture]=useState([]);
    const [furniture,setFurniture]=useState([]);

    async function getFurnitureTypes() {
        const furniture = await fetch("http://demo9984311.mockable.io/namjestaj");
        const json = await furniture.json();
        console.log(json);

        return json;
      }
   
    useEffect(()=>{
        getFurnitureTypes().then((data)=>{console.log("DRUGI PUT ", data); setAllFurniture(data.vrsteNamjestaja)});
   },[])
    return <div>
        {/* <h1>{allFurniture}</h1> */}
        {/* <h1>{
        allFurniture.map((item, index)=>(<h1 key={index}>{item}</h1>))
        }</h1> */}
        <select value={furniture} onChange={(e)=>{console.log("AAA", e.target.value);setFurniture(e.target.value)}}>
            {allFurniture.map((item, index)=>(<option value={item} key={index}>{item}</option>))}
        </select>
        {furniture && <h1>{furniture}</h1>}
    </div>
}