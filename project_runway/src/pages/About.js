import raf_leeming from "../../src/images/raf_leeming.png";
import "../components/About.css";
import NavBar from "../components/NavBar";

function About() {
    return (
        <div className="aboutBoxClass">
            <NavBar />
        <h1>This is the about page</h1>
        <img className="Badge" src={raf_leeming} alt="RAF Leeming Emblem"/>
        <p className="size">Contact information</p>
        <p className="size">Created by 90SU 4Sqn AX Flight</p>
        <p className="size">More stuff</p>
        </div>
    )
}

export default About;
