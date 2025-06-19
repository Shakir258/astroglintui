import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import "./index.css";

import Compatiblity from "./components/Compatiblity";
import AuthPopup from "./components/loginSignup/AuthPopup";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Prediction from "./components/Prediction";
import Compatibility from "./components/Compatiblity";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [a, setA] = useState(true);
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <Header setShowPopup={setShowPopup} />
      <AuthPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <Routes>
        {/* <Route path="/" element={<Prediction />} /> */}
        <Route path="/" element={<SearchBar />} />
        <Route path="/compatiblity" element={<Compatiblity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="flex ">
        <Prediction setShowPopup={setShowPopup} />
        {/* <Prediction setShowPopup={setShowPopup} /> */}
        <Compatibility setShowPopup={setShowPopup}/>
        
      </div>
    </div>
  );
}

export default App;
