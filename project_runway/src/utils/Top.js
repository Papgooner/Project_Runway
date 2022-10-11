import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoute";
import { useState } from "react";

function Top(props) {
    function onAuth(thing) {
        console.log(thing);
        localStorage.setItem("userAnswer", JSON.stringify(thing));
        props.upTopHandler(thing)
    }
    return (
        <div>
        <Login onAuthHandler={onAuth} />
        </div>
    )
}

export default Top;