import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/Login.css";

function Login(props) {
    const [submitValue, setSubmitValue] = useState();
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        props.onAuthHandler(submitValue);
    }
    function onChange(event) {
        setSubmitValue(event.target.value);
    }
    return (
        <div className="loginDiv">
            <div className="loginBox">
        <h1>Project Runway Login</h1>
        <form onChange={onChange} onSubmit={onSubmit}>
        <label htmlFor="usernameInput">Username</label>
        <br></br>
        <input id="usernameInput" name="User" type="text" />
        <input type="submit" />
        </form>
        </div>
        </div>
    )
}

export default Login;