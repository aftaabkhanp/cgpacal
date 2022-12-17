import React, { useState } from "react";
import "./App.css";
import GpaCalculator from "./components/GpaCalculator";
import NavBar from "./components/NavBar";
import QuickCgpaCalculator from "./components/QuickCgpaCalculator";

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <div className="App">
      <NavBar setIsHome={setIsHome} isHome={isHome} />
      {isHome && <GpaCalculator />}
      {!isHome && <QuickCgpaCalculator />}
    </div>
  );
}

export default App;
