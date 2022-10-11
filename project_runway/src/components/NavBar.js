import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
        <Link to="/Home">Dashboard</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
        </nav>
    )
}

export default NavBar;