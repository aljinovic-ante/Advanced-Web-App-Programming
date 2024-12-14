export default function DropdownMenu({ options, value, onChange }) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled value="">Odaberite</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}