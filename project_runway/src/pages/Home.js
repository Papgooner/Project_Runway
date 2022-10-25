import "../components/Home.css";
import Dropdown from "../components/Dropdown";
import "../components/Dropdown.css";
import { useState } from "react";
import Submit1 from "../components/Submit1";
import Submit2 from "../components/Submit2";
import Submit3 from "../components/Submit3";
import NavBar from "../components/NavBar";

function Home() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [runwayLength, setRunwayLength] = useState();
    const [weather, setWeather] = useState();
    const [selectedRunway, setSelectedRunway] = useState("N/A");
    const [valueLive, setValueLive] = useState();
    const [showRunway, setShowRunway] = useState("No Option Selected");

     function onEdit() {
        if (selectedRunway === 1) {
          setIsShown2(true);
          setIsShown3(false);
          setIsShown4(false);
        }
        else if (selectedRunway === 2) {
          setIsShown3(true);
          setIsShown4(false);
          setIsShown2(false);
        }
        else if (selectedRunway === 3) {
          setIsShown4(true);
          setIsShown3(false);
          setIsShown2(false);
        }
      }

      function onSubmit(submitValue) {
        localStorage.setItem("value1", JSON.stringify(submitValue));
        console.log(submitValue);
        console.log(submitValue);
        console.log(submitValue);
        const saved = localStorage.getItem("value1");
        const initialValue1 = JSON.parse(saved);
        setValueLive(initialValue1);
        setIsShown2(false);
      }
      function onSubmit2(submitValue) {
        localStorage.setItem("value2", JSON.stringify(submitValue));
        console.log(submitValue);
        const saved = localStorage.getItem("value2");
        const initialValue2 = JSON.parse(saved);
        setValueLive(initialValue2);
        setIsShown3(false);
      }
      function onSubmit3(submitValue) {
        localStorage.setItem("value3", JSON.stringify(submitValue));
        console.log(submitValue);
        const saved = localStorage.getItem("value3");
        const initialValue3 = JSON.parse(saved);
        setValueLive(initialValue3);
        setIsShown4(false);
      }
    
      function OnSelect(values) {
        setIsShown2(false);
        setIsShown3(false);
        setIsShown4(false);
        if (values === "Runway One") {
          console.log("Runway 1 loads");
          setRunwayLength("1000m");
          setWeather("Low Wind speed");
          setSelectedRunway(1);
          setShowRunway("Runway One");
          const saved = localStorage.getItem("value1");
          const initialValue1 = JSON.parse(saved);
          setValueLive(initialValue1);
          setIsShown(true);
      }
      else if (values === "Runway Two") {
          console.log("Runway 2 loads");
           setRunwayLength("1500m");
           setWeather("Fast Wind speed")
           setSelectedRunway(2);
           setShowRunway("Runway Two");
           const saved = localStorage.getItem("value2");
           const initialValue2 = JSON.parse(saved);
           setValueLive(initialValue2);
           setIsShown(true);
      }
      else if (values === "Runway Three") {
          console.log("Runway 3 loads");
          setRunwayLength("2000m");
          setWeather("Clear Skies")
          setSelectedRunway(3);
          setShowRunway("Runway Three");
          const saved = localStorage.getItem("value3");
          const initialValue3 = JSON.parse(saved);
          setValueLive(initialValue3);
          setIsShown(true);
      }
    }

    function onCancel() {
        setIsShown2(false);
        setIsShown3(false);
        setIsShown4(false);
    }
    
    return (
      <div className="HomepageDiv">
        <NavBar />
        <div className="boxOutline">
        <div className="boxClass">
            <div className="outsideColumn">
        <h1 className="title">Welcome to Project Runway!</h1>
        <br></br>
        <h2>Here you can view information about the runways of RAF Leeming.</h2>
        <div className="DropdownDiv">
        <label htmlFor="dropdown" className="para">Select a runway:</label>
        <Dropdown id="dropdown" onSelectHandler={OnSelect}/>
        </div>
        </div>
        <div className="internalBox">
        <h1 className="runway">{showRunway}</h1>
        <div className="valuesDiv">
        <p className="values">Length: {runwayLength}</p>
        <p className="values">Current Status: {valueLive}</p>
        <p className="values">Weather Information: {weather}</p>
      
        {isShown && (
  <div>
    <button onClick={onEdit} className="edit">Edit</button>
    </div>
)}
</div>
{isShown2 && (
  <div>
    <Submit1 onSubmitHandler1={onSubmit}/>
    <button onClick={onCancel} className="cancel">Cancel</button>
</div>
)}
{isShown3 && (
  <div>
    <Submit2 onSubmitHandler2={onSubmit2}/>
    <button onClick={onCancel} className="cancel">Cancel</button>
</div>
)}
{isShown4 && (
  <div>
    <Submit3 onSubmitHandler3={onSubmit3}/>
    <button onClick={onCancel} className="cancel">Cancel</button>
</div>
)}
    </div>
        </div>
        </div>
        </div>
    )
}

export default Home;