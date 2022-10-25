import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import "./components/NavBar.css";
import Profile from './pages/Profile';
import Error from './pages/Error';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Transition from './pages/Transition';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path="/Transition" element={<Transition />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
