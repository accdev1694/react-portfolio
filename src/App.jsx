import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
