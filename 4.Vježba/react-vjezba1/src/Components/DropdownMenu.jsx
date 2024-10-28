export default function DropdownMenu({options,value,onChange}){
    return (
    <select value={value} onChange={(e)=>{console.log("odabrano: ", e.target.value);onChange(e.target.value)}}>
    {   options.map((item, index)=>(<option value={item} key={index}>{item}</option>))}
    </select>
)
}