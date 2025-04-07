import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="contents main-container">
      <Link to="/" className="logo">
        oloche<span className="a-colorchange">a</span>boje
      </Link>
      <div className="navlinks">
        <Link to="./my-skills">my Skills</Link>
        <Link to="./my-projects">my Projects</Link>
        <Link to="./contact-me">contact Me</Link>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
