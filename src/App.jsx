import { useState } from "react";
import "./App.css";
import Headers from "./components/headers.jsx";
import Navbar from "./components/navbar.jsx";
import Contens from "./components/contens.jsx";
import Footers from "./components/footers.jsx";

function App() {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <Headers />
        <Contens />
        <Footers />
      </div>
    </>
  );
}

export default App;
