import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import HomePage from "./components/pages/HomePage";
import ContactMe from "./components/pages/ContactMe";
import MyProjects from "./components/pages/MyProjects";
import MySkills from "./components/pages/MySkills";
import NotFound from "./components/pages/NotFound";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Navbar />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<HomePage />}/>          
            <Route path="/contacts" element={<ContactMe />}/>
            <Route path="/projects" element={<MyProjects />}/>
            <Route path="/skills" element={<MySkills />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
