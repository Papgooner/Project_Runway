import { useState } from "react";
import "../components/Login.css";
import { Navigate } from "react-router-dom";

function Login(props) {
    const [entererdInput, setEnteredInput] = useState();
    const [isShown, setIsShown] = useState(false);

    function onSubmitHandler(event) {
        event.preventDefault();
        setIsShown(true);
    };
    function onChangeHandler(event) {
        setEnteredInput(event.target.value);
        console.log(entererdInput);
    };
    return (
        <div className="loginDiv">
            <div className="loginBox">
                <h1>Project Runway Login</h1>
                <form onChange={onChangeHandler} onSubmit={onSubmitHandler}>
                    <label htmlFor="usernameInput">Username</label>
                    <br></br>
                    <input id="usernameInput" name="User" type="text" />
                    <input type="submit" />
                </form>
            </div>
            {isShown && (
                <Navigate to="/Transition" />
            )}
        </div>
    )
}

export default Login;