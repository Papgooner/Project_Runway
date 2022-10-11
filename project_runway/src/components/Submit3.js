import { useState } from "react";
import "./Submit.css";

function Submit3(props) {
    const [submitValue, setSubmitValue] = useState()
    function PassUp(event) {
        event.preventDefault();
        props.onSubmitHandler3(submitValue);
    };

    function onChange(event) {
        setSubmitValue(event.target.value);
        console.log("onChange has fired")
    }
    return (
        <div className="formDiv">
            <form onChange={onChange} onSubmit={PassUp}>
    <input id="textInput" type="text" />
    <input id="submitInput" type="submit" />
    </form>
        </div>
    )
}

export default Submit3;