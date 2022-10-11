import React from "react";
import "./Dropdown.css";
function Dropdown(props) {

    function PassUp(event) {
        console.log(event.target.value)
        props.onSelectHandler(event.target.value)
    }
return (
    <div>
        <select className="dropdown" defaultValue={"default"} onChange={PassUp}>
        <option value={"default"} disabled>
          Choose an option
        </option>
    <option>Runway One</option>
    <option>Runway Two</option>
    <option>Runway Three</option>
    </select>
    </div>
)
}

export default Dropdown;