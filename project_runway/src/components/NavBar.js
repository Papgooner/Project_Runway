import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/About">About</Link>
        </nav>
    )
}

export default NavBar;