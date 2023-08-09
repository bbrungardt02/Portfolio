import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Routes className="route_flex">
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
