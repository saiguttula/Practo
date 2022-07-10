import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import "./App.css";
import { Routes, Route } from "react-router";
import Doctorslist from "./Components/Doctorslist/Doctorslist.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/doctors" element={<Doctorslist />} />
      </Routes>
    </div>
  );
}

export default App;
