import "../AddItem.css";

export default function AddItem() {
    return (
        <div className="add-item">
            <h5>Add Item</h5>

            <form action="http://localhost:3001/add">
            <p>Name:</p>
            <input name="name" type="text"></input>

            <p>Due by:</p>
            <input name="due" type="text"></input>

            <p>Description:</p>
            <input name="description" type="text"></input>

    
            <input type="submit"></input>
            </form>
        </div> 
    );
}