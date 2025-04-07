import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="contents main-container">
      <Link to="/" className="logo">
        oloche<span className="a-colorchange">a</span>boje
      </Link>
      <div className="navlinks">
        <Link to="./">homePage</Link>
        <Link to="./my-skills">mySkills</Link>
        <Link to="./my-projects">myProjects</Link>
        <Link to="./contact-me">contactMe</Link>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
