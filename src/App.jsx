import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import "./index.css";
import SignUp from "./pages/SignUp";
import Prediction from "./pages/Prediction";
import Compatiblity from "./pages/Compatiblity";
import SearchBar from "./components/SearchBar";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Prediction />} /> */}
        <Route path="/" element={<SearchBar />} />
        <Route path="/compatiblity" element={<Compatiblity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
       </Routes>
    </div>
  );
}

export default App;
