import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
        <Link to="/Home">Dashboard</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Top">Logout</Link>
        </nav>
    )
}

export default NavBar;