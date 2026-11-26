import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Expertise from "./pages/Expertise";
import Creative from "./pages/Creative";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename="/ipsix-portfolio">
      <div className="app cinematic-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
