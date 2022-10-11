import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import "./components/NavBar.css";
import Profile from './pages/Profile';
import PrivateRoutes from './utils/PrivateRoute';
import Error from './pages/Error';
import Top from './utils/Top';
import { useState } from "react"; 

function App() {
  const [thing, setThing] = useState();
  function upTop (value) {
    console.log(value);
    setThing(value);
  }

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/Top" element={<Top upTopHandler={upTop}/>} />

        <Route element={<PrivateRoutes passDown={thing}/>}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/" element={<Top/>} exact />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
