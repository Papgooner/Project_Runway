import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = (props) => {
    let auth = {"token":true}
    const saved = localStorage.getItem("userAnswer");
    const Value = JSON.parse(saved);
    console.log(Value);
    return (
        auth.token ? <Outlet/> : <Navigate to="/top" />
    )
}

export default PrivateRoutes;