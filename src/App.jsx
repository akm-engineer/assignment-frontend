import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
