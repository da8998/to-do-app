import "../List.css";

export default function List(props) {
    return (
        <div className="List">
            
            <h3>{props.name}</h3>
            <h4>Do this by: <strong>{props.due}</strong></h4>
            <p>{props.description}</p>
            
        </div>
    );
}