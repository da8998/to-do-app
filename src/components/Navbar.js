import "../Navbar.css";
import {useState} from 'react';
import AddItem from "./AddItem";

export default function Navbar() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current); 
      };

    return(
        <div className="nav">
            <button onClick={handleClick} class="btn btn-secondary">Add Item</button>
            {isShown && <AddItem />}
        </div>
    )
}