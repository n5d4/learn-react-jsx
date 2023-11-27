import {useState} from "react";

export default function Player({initialName, symbol}) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? <input type="text" required defaultValue={playerName} onChange={handleChange}></input> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    );
}