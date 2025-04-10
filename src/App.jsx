import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import "./components/styles/global.css"
import PageSection from "./components/common/PageSection/PageSection";
import HomePage from "./components/pages/HomePage/HomePage";
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
