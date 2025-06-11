import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import "./index.css";
import Prediction from "./pages/Prediction";
import Compatiblity from "./pages/Compatiblity";
import AuthPopup from "./components/loginSignup/AuthPopup";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);
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
    </div>
  );
}

export default App;
