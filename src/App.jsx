import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import "./components/styles/global.css"
import PageSection from "./components/common/PageSection/PageSection";
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <PageSection />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
