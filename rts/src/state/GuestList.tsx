import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    // TS does not infer the correct type below, so we tell it that it will
    // be an array of strings in the angle brackets by useState
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>


            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
        </div>
    )
};

export default GuestList;