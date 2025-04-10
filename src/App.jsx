import HomePage from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
import {data} from "./components/introData";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<HomePage data={data["home"]} />}
          />
          <Route
            path="/my-skills"
            element={<MySkills data={data["skills"]} />}
          />
          <Route
            path="/my-projects"
            element={<MyProjects data={data["projects"]} />}
          />
          <Route
            path="/contact-me"
            element={<ContactMe data={data["contact"]} />}
          />
          <Route
            path="*"
            element={<PageNotFound data={data["notFound"]} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
