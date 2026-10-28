import { Routes, Route } from "react-router-dom";
import './index.css'



import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

function App() {


  return (
    <div className="">  




 

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>

      </Routes>

    </div>

  )
}

export default App
