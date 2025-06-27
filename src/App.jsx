import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ClarksTables from "./pages/ClarksTables.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/clarkstables" element={<ClarksTables />} />
    </Routes>
  );
}

export default App;
