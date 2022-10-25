import PrivateRoutes from "../utils/PrivateRoutes";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Transition() {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, 10);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div>
            <p>Loading</p>
            {isShown && (
                <Navigate to="/Home" />
            )};
        </div>
    )
}

export default Transition;