import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function PrivateRoutes() {
    let auth = {"token": true}
return (
    auth.token ? <Outlet /> : <Navigate to="/Login" />
)
};

export default PrivateRoutes;