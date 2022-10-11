import "../components/Error.css"
import raf_leeming from "../images/raf_leeming.png";
function Error() {
    return (
        <div className="container">
        <p id="Error">An error has occured, please close this window and try again.</p>
        <img className="Badge1" src={raf_leeming} alt="RAF Leeming Emblem"/>
        </div>
    )
}

export default Error;