export default function DropdownMenu({options,value,onChange}){
    return (
    <select value={value} onChange={(e)=>{onChange(e.target.value)}}>
    {   options.map((item, index)=>(<option value={item} key={index}>{item}</option>))}
    </select>
)
}